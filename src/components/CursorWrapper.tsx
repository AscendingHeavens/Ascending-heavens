"use client";

import { useEffect, useState } from "react";
import SplashCursor from "./SplashCursor";

export default function CursorWrapper() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth > 768;
    setEnabled(isDesktop);
  }, []);

  if (!enabled) return null;

  return (
    <SplashCursor
      DENSITY_DISSIPATION={3.5}
      VELOCITY_DISSIPATION={2}
      PRESSURE={0.1}
      CURL={3}
      SPLAT_RADIUS={0.2}
      SPLAT_FORCE={6000}
      COLOR_UPDATE_SPEED={10}
      SHADING
      RAINBOW_MODE={false}
      COLOR="#A855F7"
    />
  );
}