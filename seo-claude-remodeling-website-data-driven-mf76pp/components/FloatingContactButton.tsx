"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageSquare, X } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { STANDALONE_ROUTES } from "@/lib/standaloneRoutes";

/** Routes that already embed <ContactForm /> inline -- the floating button
 * must not open a second copy there, since the form's element ids
 * (id="name", id="phone", etc.) would collide with the one already on the
 * page and break label associations. */
const HAS_INLINE_CONTACT_FORM = ["/", "/contact"];

export function FloatingContactButton() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (
    STANDALONE_ROUTES.includes(pathname) ||
    pathname.startsWith("/es-mx") ||
    HAS_INLINE_CONTACT_FORM.includes(pathname)
  ) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Contact us"
        aria-haspopup="dialog"
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
      >
        <MessageSquare className="h-5 w-5" aria-hidden="true" />
        Contact Us
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Contact us"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg border bg-card p-6 shadow-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-charcoal"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <h2 className="pr-8 text-xl font-bold tracking-tight text-charcoal">
              Get Your Free Estimate
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us about your project and we&apos;ll get back to you within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
