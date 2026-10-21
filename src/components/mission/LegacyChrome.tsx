"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const TwinklingStars = dynamic(() => import("../TwinklingStars"), { ssr: false });
const CursorTrail = dynamic(() => import("../CursorTrail"), { ssr: false });

export default function LegacyChrome() {
  const pathname = usePathname() ?? "";
  const is3d = pathname === "/3d" || pathname.startsWith("/3d/");
  if (!is3d) return null;

  return (
    <>
      <TwinklingStars />
      <CursorTrail />
    </>
  );
}
