export type Project = {
  name: string;
  href: string;
  /** Optional. Leave unset until a real description exists. */
  description?: string;
  /** Optional. Leave unset until real tags exist. */
  tags?: readonly string[];
  /** Optional public image path. Leave unset until real art exists. */
  thumbnail?: string;
  /** Alt text for the thumbnail. Use an empty string when the image is decorative. */
  thumbnailAlt?: string;
};

export const PROJECTS: readonly Project[] = [
  { name: "90s-tv", href: "https://github.com/dczii/90s-tv" },
  { name: "TickrX", href: "https://github.com/dczii/TickrX" },
  { name: "BookBot", href: "https://github.com/dczii/BookBot" },
  { name: "quoteai", href: "https://github.com/dczii/quoteai" },
  { name: "qota", href: "https://github.com/dczii/qota" },
  { name: "URecruitment", href: "https://github.com/dczii/URecruitment" },
];
