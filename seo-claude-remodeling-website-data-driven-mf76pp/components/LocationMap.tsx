import { company } from "@/data/company";

/**
 * Static Google Maps embed (Maps Embed "no API key" share iframe) for the
 * business's real location. No JS required — safe as a Server Component.
 * Wrapped in a padding-bottom box so it never causes layout shift.
 */
export function LocationMap() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg border shadow-sm"
      style={{ paddingBottom: "50%", height: 0 }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.309808652842!2d-97.272115!3d32.88997619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x20376d3a4511fad3%3A0x532c9d7004470496!2sMy%20Dream%20Home%20Remodeling!5e0!3m2!1sen!2sus!4v1785863473437!5m2!1sen!2sus"
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        title={`${company.name} location in Fort Worth, TX`}
      />
    </div>
  );
}
