// lucide-react no longer ships brand glyphs, so these are small hand-rolled
// line icons matching the same stroke style (strokeWidth ~1.75) used elsewhere.

export function FacebookIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M15 8.5h2V5.2c-.35-.05-1.54-.2-2.94-.2-2.91 0-4.9 1.83-4.9 5.2V13H6.5v3.7h3.66V22h3.7v-5.3h3.06l.5-3.7h-3.56v-2.4c0-1.07.29-1.8 1.14-1.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.5c-5.5 0-9.5 4.2-9.5 9.4 0 4.2 2.6 7.7 6.2 8.9.45.1.62-.2.62-.44v-1.7c-2.53.56-3.06-1.13-3.06-1.13-.42-1.06-1.02-1.34-1.02-1.34-.83-.58.06-.57.06-.57.92.07 1.4.96 1.4.96.82 1.4 2.14 1 2.66.76.08-.6.32-1 .58-1.23-2.02-.23-4.15-1.03-4.15-4.58 0-1.01.35-1.84.93-2.49-.1-.23-.4-1.17.09-2.43 0 0 .76-.25 2.5.95a8.4 8.4 0 0 1 4.55 0c1.73-1.2 2.5-.95 2.5-.95.5 1.26.19 2.2.09 2.43.58.65.93 1.48.93 2.49 0 3.56-2.14 4.34-4.18 4.57.33.29.62.87.62 1.75v2.6c0 .24.16.55.63.44 3.6-1.22 6.2-4.7 6.2-8.9C21.5 6.7 17.5 2.5 12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TikTokIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M14 3.5c.4 2.1 1.7 3.5 4 3.8v2.6c-1.4 0-2.8-.4-4-1.2v6.1c0 3-2.4 5.2-5.2 5.2S3.5 17.8 3.5 15c0-2.9 2.4-5.2 5.3-5.2.4 0 .8 0 1.2.1v2.7c-.4-.1-.8-.2-1.2-.2-1.4 0-2.6 1.1-2.6 2.6s1.1 2.6 2.6 2.6 2.7-1.1 2.7-2.6V3.5H14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
