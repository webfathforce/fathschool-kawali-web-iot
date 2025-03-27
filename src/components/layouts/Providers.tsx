"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./Theme";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const client = new QueryClient({});

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <HeroUIProvider>
          {children}
          <Toaster richColors />
        </HeroUIProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
