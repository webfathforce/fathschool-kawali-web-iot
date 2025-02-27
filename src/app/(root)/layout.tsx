"use client";

import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <QueryClientProvider client={new QueryClient()}>
        {children}
        <Toaster />
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
