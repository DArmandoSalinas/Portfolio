type P = { className?: string };
const base = "h-[1em] w-[1em]";

export const ArrowUpRight = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`${base} ${className}`}>
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GitHubIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={`${base} ${className}`}>
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

export const LinkedInIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={`${base} ${className}`}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const DownloadIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`${base} ${className}`}>
    <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PlayIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`${base} ${className}`}>
    <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 8.6 16 12l-6 3.4V8.6Z" fill="currentColor" />
  </svg>
);

export const MailIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`${base} ${className}`}>
    <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="m4 7.5 8 5.5 8-5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PhoneIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`${base} ${className}`}>
    <path d="M6.2 3.5h2.9l1.5 3.7-1.9 1.4a11.4 11.4 0 0 0 4.7 4.7l1.4-1.9 3.7 1.5v2.9c0 1.2-1 2.2-2.2 2.1A15.6 15.6 0 0 1 4.1 5.7 2.1 2.1 0 0 1 6.2 3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

export const CloseIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`${base} ${className}`}>
    <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MenuIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`${base} ${className}`}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SparkIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden className={`${base} ${className}`}>
    <path d="M12 2.5 13.9 9l6.6 1.9-6.6 1.9L12 19.4l-1.9-6.6L3.5 11 10.1 9 12 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
