import type { ReactNode } from "react";
import { NavbarEs } from "@/components/es-mx/NavbarEs";
import { FooterEs } from "@/components/es-mx/FooterEs";

export default function EsMxLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarEs />
      <main>{children}</main>
      <FooterEs />
    </>
  );
}
