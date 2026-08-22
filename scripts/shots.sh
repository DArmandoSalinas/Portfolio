#!/usr/bin/env bash
set -euo pipefail
PORT="${PORT:-4322}"
OUT="${1:?usage: shots.sh <outdir>}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p "$OUT"

npx next start -p "$PORT" >/tmp/shot-server.log 2>&1 &
PID=$!
trap 'kill "$PID" 2>/dev/null || true' EXIT
curl -s --retry 40 --retry-delay 1 --retry-connrefused -o /dev/null "http://127.0.0.1:${PORT}/"

shot () { # name url w h
  "$CHROME" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
    --force-device-scale-factor=1 --virtual-time-budget=4000 --force-prefers-reduced-motion \
    --window-size="$3,$4" --screenshot="$OUT/$1.png" "$2" >/dev/null 2>&1
}

B="http://127.0.0.1:${PORT}"
shot 01-hero        "$B/"             1440 1000
shot 02-work        "$B/#work"        1440 1200
shot 03-experience  "$B/#experience"  1440 1200
shot 04-credentials "$B/#credentials" 1440 1200
shot 05-toolkit     "$B/#toolkit"     1440  900
shot 06-contact     "$B/#contact"     1440 1000
shot 07-mobile-hero "$B/"              390  844
shot 08-mobile-work "$B/#work"         390  844
shot 09-resume-page "$B/resume"       1440 1200
echo "shots in $OUT"; ls "$OUT"
