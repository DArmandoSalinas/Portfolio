#!/usr/bin/env bash
# Renders /resume from the production build into public/resume/<CV>.pdf using
# headless Chrome, so the PDF can never drift from the site.
set -euo pipefail

PORT="${PORT:-4321}"
OUT="public/resume/Diego-Armando-Salinas-Lugo-CV.pdf"

CHROME=""
for c in "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
         "/Applications/Chromium.app/Contents/MacOS/Chromium" \
         "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" \
         "$(command -v google-chrome || true)" \
         "$(command -v chromium || true)"; do
  [ -n "$c" ] && [ -x "$c" ] && CHROME="$c" && break
done

if [ -z "$CHROME" ]; then
  echo "No Chrome/Chromium found. Open /resume in a browser and Print → Save as PDF to:"
  echo "  $OUT"
  exit 1
fi

[ -d .next ] || npm run build

npx next start -p "$PORT" >/tmp/cv-server.log 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT

curl -sS --retry 40 --retry-delay 1 --retry-connrefused \
  -o /dev/null "http://127.0.0.1:${PORT}/resume"

mkdir -p "$(dirname "$OUT")"
"$CHROME" --headless=new --disable-gpu --no-sandbox --no-first-run \
  --virtual-time-budget=6000 \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  "http://127.0.0.1:${PORT}/resume" >/dev/null 2>&1

echo "Wrote $OUT ($(wc -c < "$OUT") bytes)"
