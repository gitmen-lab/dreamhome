"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare } from "lucide-react";
import { STANDALONE_ROUTES } from "@/lib/standaloneRoutes";

export function FloatingContactButton() {
  const pathname = usePathname();

  if (STANDALONE_ROUTES.includes(pathname) || pathname.startsWith("/es-mx")) {
    return null;
  }

  return (
    <Link
      href="/contact"
      aria-label="Contact us"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
    >
      <MessageSquare className="h-5 w-5" aria-hidden="true" />
      Contact Us
    </Link>
  );
}
