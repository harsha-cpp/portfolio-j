"use client";

import dynamic from "next/dynamic";

const CursorGlow = dynamic(() => import("@/components/ui/CursorGlow"), {
  ssr: false,
});

export default function ClientCursorGlow() {
  return <CursorGlow />;
}
