"use client";

import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";
import Providers from "@/components/layouts/Providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <NavBar />
      <section className="container">{children}</section>
      <Footer />
    </Providers>
  );
}
