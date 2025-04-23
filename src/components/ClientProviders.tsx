"use client";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AnimatePresence mode="wait">
        {children}
        <Analytics />
      </AnimatePresence>
    </ThemeProvider>
  );
}
