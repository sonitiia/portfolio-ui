"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-elevated text-muted"
        aria-label="Toggle theme"
      >
        <span className="h-4 w-4" aria-hidden />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-elevated text-muted transition hover:border-line-strong-hover hover:text-heading"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
