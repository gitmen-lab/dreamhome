"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { servicesEsMx } from "@/data/services.es-mx";
import { cities } from "@/data/cities";
import { cityLabel } from "@/lib/helpers";

interface ContactFormProps {
  defaultService?: string;
  defaultCity?: string;
  /** Defaults to "en". Swaps every visible label/placeholder/message. */
  locale?: "en" | "es";
}

const STRINGS = {
  en: {
    formLabel: "Free estimate request",
    fullName: "Full Name",
    namePlaceholder: "Jane Smith",
    phone: "Phone",
    email: "Email",
    serviceNeeded: "Service Needed",
    selectService: "Select a service…",
    somethingElse: "Something else",
    yourCity: "Your City",
    selectCity: "Select your city…",
    otherNearby: "Other / nearby",
    projectLabel: "Tell Us About Your Project",
    projectPlaceholder: "e.g., We'd like to convert our tub to a walk-in shower…",
    sending: "Sending…",
    submit: "Request My Free Estimate",
    disclaimer: "No spam, no pressure. We'll contact you within one business day.",
    successTitle: "Request Received!",
    successBody:
      "Thanks for reaching out. A member of our team will contact you within one business day to schedule your free estimate.",
    submissionFailed: "Submission failed",
    genericError: "Something went wrong. Please try again.",
  },
  es: {
    formLabel: "Solicitud de cotización gratuita",
    fullName: "Nombre Completo",
    namePlaceholder: "Juana Pérez",
    phone: "Teléfono",
    email: "Correo Electrónico",
    serviceNeeded: "Servicio Necesitado",
    selectService: "Seleccione un servicio…",
    somethingElse: "Otro",
    yourCity: "Su Ciudad",
    selectCity: "Seleccione su ciudad…",
    otherNearby: "Otra / cercana",
    projectLabel: "Cuéntenos Sobre su Proyecto",
    projectPlaceholder: "por ejemplo: Nos gustaría convertir nuestra tina en una regadera de entrada…",
    sending: "Enviando…",
    submit: "Solicitar mi Cotización Gratuita",
    disclaimer: "Sin spam, sin presión. Nos pondremos en contacto dentro de un día hábil.",
    successTitle: "¡Solicitud Recibida!",
    successBody:
      "Gracias por contactarnos. Un miembro de nuestro equipo se comunicará con usted dentro de un día hábil para programar su cotización gratuita.",
    submissionFailed: "Error al enviar",
    genericError: "Algo salió mal. Por favor, inténtelo de nuevo.",
  },
};

export function ContactForm({ defaultService, defaultCity, locale = "en" }: ContactFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const t = STRINGS[locale];
  const serviceList = locale === "es" ? servicesEsMx : services;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? response.statusText ?? t.submissionFailed);
      }

      setStatus("success");
      router.push(locale === "es" ? "/es-mx/gracias" : "/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.genericError);
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg border bg-accent p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-charcoal">{t.successTitle}</h3>
        <p className="mt-2 text-muted-foreground">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label={t.formLabel}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            {t.fullName} <span className="text-red-500">*</span>
          </label>
          <Input id="name" name="name" autoComplete="name" required placeholder={t.namePlaceholder} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            {t.phone} <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(817) 555-0123"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
          {t.email}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-sm font-medium text-charcoal"
          >
            {t.serviceNeeded}
          </label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService ?? ""}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">{t.selectService}</option>
            {serviceList.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="other">{t.somethingElse}</option>
          </select>
        </div>
        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-charcoal">
            {t.yourCity}
          </label>
          <select
            id="city"
            name="city"
            defaultValue={defaultCity ?? ""}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">{t.selectCity}</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {cityLabel(c)}
              </option>
            ))}
            <option value="other">{t.otherNearby}</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          {t.projectLabel}
        </label>
        <Textarea id="message" name="message" placeholder={t.projectPlaceholder} />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            {t.sending}
          </>
        ) : (
          t.submit
        )}
      </Button>
      {status === "error" && error ? (
        <p className="text-center text-sm text-red-600">{error}</p>
      ) : null}
      <p className="text-center text-xs text-muted-foreground">{t.disclaimer}</p>
    </form>
  );
}
