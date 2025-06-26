"use client";

import { SignIn } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center  bg-background px-4 pt-20 pb-20">
      <SignIn
        appearance={{
          baseTheme: theme === "dark" ? dark : undefined,
        }}
        afterSignInUrl="/Dashboard"
        redirectUrl="/Dashboard"
      />
    </div>
  );
}
