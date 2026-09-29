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
