// components/ThemeLoader.tsx
"use client";

import { useTheme } from "next-themes";

export default function ThemeLoader() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center w-full min-h-[60vh]">
      <div className="relative flex gap-3">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-bounce"
            style={{
              animationDelay: `${i * 0.15}s`,
              backgroundColor: theme === "dark" ? "#fff" : "#000",
            }}
          />
        ))}
      </div>
    </div>
  );
}
