import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 22, ...props }: IconProps) {
  return { width: size, height: size, viewBox: "0 0 24 24", fill: "none", ...props };
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true">
      <path
        d="M14.2 3.2c.5 3.3 2.2 5 5.3 5.3v3.1c-1.8.1-3.4-.4-5.3-1.5v6.6c0 4.3-3.3 6.6-6.7 6.6-3.3 0-6.3-2.3-6.3-6.3 0-4.2 3.2-6.5 6.5-6.5.4 0 .9 0 1.3.1v3.3c-.4-.1-.8-.2-1.3-.2-1.9 0-3.4 1.2-3.4 3.3 0 2 1.4 3.2 3.3 3.2 1.9 0 3.2-1.1 3.2-3.5V3.2h3.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true">
      <path
        d="M7.2 3.8c.4-.5 1.2-.6 1.7-.2l2.1 1.6c.5.4.6 1.1.3 1.6L10.4 9c1.4 2.4 2.9 3.9 5.2 5.2l1.9-.9c.5-.3 1.2-.2 1.6.3l1.6 2.1c.4.6.3 1.3-.2 1.7l-1.5 1.2c-.6.5-1.5.7-2.3.5-3.7-.8-7.4-3.6-10.5-8S3.2 6.2 4.1 2.6c.2-.8.8-1.4 1.6-1.6L7.2 3.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true">
      <path
        d="M12 21s6.5-5.2 6.5-11A6.5 6.5 0 0 0 5.5 10C5.5 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true">
      <path
        d="m12 3.2 2.4 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.1 6.9 18.6l1.1-5.6-4.2-3.9 5.7-.7L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuBookIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true">
      <path
        d="M4 5.5c2.4-1.2 4.8-1.2 7.2 0v13c-2.4-1.2-4.8-1.2-7.2 0v-13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12.8 5.5c2.4-1.2 4.8-1.2 7.2 0v13c-2.4-1.2-4.8-1.2-7.2 0v-13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true">
      <path d="M4 11.2 12 4.5l8 6.7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6.2 10.2V19h11.6v-8.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true">
      <path d="M12 4.5v10" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8 11.5 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M5 19h14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ExpandIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true">
      <path d="M9 5H5v4M15 5h4v4M9 19H5v-4M15 19h4v-4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true">
      <path d="M6 6 18 18M18 6 6 18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12.04 3.2A8.7 8.7 0 0 0 3.3 11.9c0 1.53.4 3.03 1.16 4.35L3.2 20.8l4.68-1.22a8.77 8.77 0 0 0 4.16 1.06h.04c4.8 0 8.7-3.9 8.72-8.7 0-2.32-.9-4.5-2.55-6.14A8.64 8.64 0 0 0 12.04 3.2Zm0 15.9h-.03a7.3 7.3 0 0 1-3.72-.99l-.27-.16-2.77.73.74-2.7-.18-.28a7.24 7.24 0 0 1-1.14-3.9 7.28 7.28 0 0 1 12.4-5.18 7.2 7.2 0 0 1 2.14 5.16c-.02 4.02-3.3 7.3-7.17 7.3Zm4.02-5.46c-.22-.11-1.3-.64-1.5-.71-.2-.08-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.14-.26.16-.48.05-.22-.11-.93-.34-1.77-1.1-.65-.58-1.1-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.4.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.4-.06-.11-.5-1.2-.68-1.64-.18-.43-.36-.37-.5-.38h-.42c-.15 0-.4.06-.6.28-.22.22-.8.78-.8 1.9 0 1.12.82 2.2.94 2.35.11.15 1.6 2.45 3.88 3.44.54.23.97.37 1.3.48.55.17 1.04.15 1.43.09.44-.06 1.3-.53 1.48-1.05.18-.51.18-.96.13-1.05-.06-.1-.2-.15-.42-.26Z"
      />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base(props)} aria-hidden="true">
      <path
        d="M12 19.4s-7.2-4.4-7.2-9.2A3.9 3.9 0 0 1 12 7.4a3.9 3.9 0 0 1 7.2 2.8c0 4.8-7.2 9.2-7.2 9.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
