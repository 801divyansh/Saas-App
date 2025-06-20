"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' } }}>
        {children}
      </ClerkProvider>
    </ThemeProvider>
  );
}
