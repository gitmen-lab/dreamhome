import { Phone, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

/**
 * Visible Name/Address/Phone block, formatted to match the Google Business
 * Profile listing exactly. Rendered as crawlable text (never an image) so
 * it's readable in "View Source," not just in the footer.
 */
export function NAPBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-sm ${className}`}
    >
      <span className="font-semibold text-charcoal">{company.name}</span>
      <span className="flex items-center gap-1.5 text-muted-foreground">
        <MapPin className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
        {company.address.street}, {company.address.city}, {company.address.state}{" "}
        {company.address.zip}
      </span>
      <a
        href={telHref(company.phone)}
        className="flex items-center gap-1.5 font-semibold text-primary hover:underline"
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
        {company.phoneDisplay}
      </a>
    </div>
  );
}
