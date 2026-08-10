import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

const IMG_BASE = "/images/blog/small-bathroom-remodeling-ideas";

function IdeaImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="mt-6 mb-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
      </div>
      <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export default function SmallBathroomRemodelingIdeas() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Short answer</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          These small bathroom remodeling ideas share the same moves: a curbless walk-in shower
          instead of a tub, a floating vanity that shows floor underneath it, an oversized mirror,
          one continuous surface instead of a dozen small materials, and light from more than one
          source. None of it requires knocking out walls.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          The photos below illustrate each idea. They&apos;re curated design examples, not all from a{" "}
          <Link href="/services/bathroom-remodeling" className="text-primary hover:underline">
            {company.name} bathroom remodel
          </Link>{" "}
          — the ones that are ours are labeled as such.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        1. Ditch the tub for a curbless walk-in shower
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        A tub-shower combo eats floor space with a step and a curtain track. A curbless walk-in shower
        with frameless glass reads as one continuous room instead of a room-within-a-room, which is the
        single biggest reason it&apos;s the most requested change we see in small hall and guest
        bathrooms.
      </p>
      <IdeaImage
        src={`${IMG_BASE}/frameless-walk-in-shower-idea.jpg`}
        alt="Frameless glass walk-in shower with a rain shower head and built-in stone bench"
        caption="Design idea: frameless glass and a curbless entry remove the visual break between the shower and the rest of the room."
      />
      <div className="mt-6 rounded-lg border bg-muted p-5">
        <p className="text-sm font-semibold text-charcoal">
          A real one we built in{" "}
          <Link href="/service-areas/fort-worth-tx" className="text-primary hover:underline">
            Fort Worth
          </Link>
        </p>
        <IdeaImage
          src="/images/gallery/bathroom-remodel-after-tile-walk-in-shower.jpg"
          alt="Finished walk-in shower with white subway tile, shiplap accent wall, and patterned floor tile"
          caption="James R., Fort Worth — tub-to-shower conversion: “They converted our cramped tub into a beautiful walk-in shower with frameless glass. The tile work is flawless — friends assume we spent twice what we did.”"
        />
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        2. Recessed niches instead of shower caddies
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        A built-in niche is framed and waterproofed into the wall during the shower rebuild, so there&apos;s
        nowhere for a wire caddy to rust or a corner shelf to look bolted-on. It&apos;s a small detail that
        only works if it&apos;s planned before tile goes up.
      </p>
      <IdeaImage
        src={`${IMG_BASE}/recessed-shower-niche-idea.jpg`}
        alt="Recessed tiled niche shelf holding folded towels and bottles in a shower wall"
        caption="Design idea: a recessed niche built into the wall keeps bottles and towels off the floor without adding a piece of furniture."
      />

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        3. A floating vanity with light underneath it
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        A wall-mounted vanity shows floor underneath it instead of blocking it, which reads as more
        square footage even though the room hasn&apos;t changed size. Add a warm LED strip along the
        underside and the same trick works at night, too.
      </p>
      <IdeaImage
        src={`${IMG_BASE}/floating-vanity-led-lighting-idea.jpg`}
        alt="Close-up of a floating wood vanity with a warm LED light strip along the underside"
        caption="Design idea: a floating vanity with an under-cabinet LED strip — floor stays visible, and the light doubles as a nightlight."
      />

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        4. Swap the overhead light for a backlit mirror
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        A single overhead fixture in a small bathroom throws hard shadows across the one surface you
        actually use it for — your face at the mirror. A backlit LED mirror puts light where it&apos;s
        needed and gives the room a second light source without adding a fixture to the ceiling.
      </p>
      <IdeaImage
        src={`${IMG_BASE}/backlit-round-mirror-idea.jpg`}
        alt="Round backlit LED mirror glowing above a dark stone vanity with candles lit nearby"
        caption="Design idea: a backlit round mirror replaces harsh overhead light with even, shadow-free light at face height."
      />

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        5. One patterned accent wall instead of tiling the whole room
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Patterned tile on every wall of a small bathroom can close the room in. Used on a single wall —
        behind the vanity, or as the shower&apos;s back wall — the same tile becomes a focal point instead
        of visual noise, and it costs less because you&apos;re buying a fraction of the square footage.
      </p>
      <IdeaImage
        src={`${IMG_BASE}/patterned-tile-accent-wall-idea.jpg`}
        alt="Patterned terracotta and cream tile accent wall behind a round mirror and floating wood vanity"
        caption="Design idea: patterned tile on one wall only, with plain plaster everywhere else, keeps the pattern from overwhelming the room."
      />

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        6. Vertical tile and a color that isn&apos;t gray
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Vertical tile lines draw the eye up, which makes a low ceiling feel taller. Large-format tile
        does the same thing a different way — fewer grout lines read as more open wall. Pair either
        with a warmer color — sage, olive, warm white — instead of the cool gray that dominated the
        last decade of bathroom remodels, and a small room reads as intentional rather than cramped.
      </p>
      <IdeaImage
        src={`${IMG_BASE}/sage-green-vertical-tile-idea.jpg`}
        alt="Sage green vertical tile bathroom with a floating wood vanity and round mirror"
        caption="Design idea: vertical tile plus a warm color instead of gray gives a small bathroom more visual height."
      />

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        7. A seamless waterproof finish for a true wet room
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Fewer grout lines means less to clean and less visual clutter. A troweled, waterproof finish
        that runs from the shower wall onto the floor with no curb or transition strip is the most
        seamless version of that idea — it does require the same membrane and waterproofing work as any
        curbless shower underneath it.
      </p>
      <IdeaImage
        src={`${IMG_BASE}/seamless-microcement-finish-idea.jpg`}
        alt="Close-up of a seamless waterproof wall and floor finish curving into a coved corner"
        caption="Design idea: a seamless troweled finish across the floor and lower walls, with no grout lines to maintain."
      />

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        8. A vessel sink and natural stone instead of a bigger vanity
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        You can&apos;t make a small vanity bigger, but you can make it more interesting. A stone vessel
        sink and a textured stone accent wall add visual weight and material contrast without taking up
        any more floor space than a standard drop-in sink would.
      </p>
      <IdeaImage
        src={`${IMG_BASE}/stone-vessel-sink-vanity-idea.jpg`}
        alt="Stone vessel sink on a floating stone vanity against a natural stone accent wall"
        caption="Design idea: a stone vessel sink and textured stone wall add character to a vanity without adding square footage."
      />

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        9. Warm metal fixtures instead of chrome
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Swapping chrome for brushed brass or bronze on the faucet, shower valve, and hardware is one of
        the least expensive changes on this list relative to the difference it makes — it warms up every
        other material in the room, from white tile to natural wood.
      </p>
      <IdeaImage
        src={`${IMG_BASE}/warm-brass-faucet-idea.jpg`}
        alt="Close-up of a brushed brass faucet with a single water droplet against a stone backsplash"
        caption="Design idea: brushed brass or bronze fixtures warm up white tile, stone, and wood without any layout change."
      />

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        10. Pick two or three materials, not five
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        The ideas above work best together when the materials are limited on purpose — one wood tone,
        one stone or tile, one metal finish. A small room can&apos;t absorb five competing materials the
        way a large one can. This is the same material-selection work we walk every homeowner through
        before demo starts.
      </p>
      <IdeaImage
        src={`${IMG_BASE}/material-moodboard-idea.jpg`}
        alt="Flat-lay moodboard of wood, marble, travertine, and linen material samples"
        caption="Design idea: a small, deliberate material palette — one wood, one stone, one linen — keeps a small bathroom cohesive."
      />

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        11. One oversized mirror instead of a small one
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        A mirror that runs close to the ceiling and spans most of the vanity wall reflects far more
        light than a standard framed mirror. It&apos;s one of the cheapest changes on this list — a
        swap, not a remodel — and it does more for how big the room feels than almost anything else
        here.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        12. A pocket door instead of a swinging one
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        A standard hinged door swings into 8–10 square feet of floor space that&apos;s unusable while
        it&apos;s open. A pocket door slides into the wall and gives that space back. It&apos;s real
        construction — the wall has to be opened and framed for the door cavity — so plan on it during
        a fuller remodel rather than as a weekend swap.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        What each idea actually costs
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Ideas #3, #4, #6 (as a paint/color change), #8, #9, #10, and #11 are cosmetic changes — new
        fixtures, a vanity swap, paint, and lighting with no layout change. Those fall in the{" "}
        <strong className="text-charcoal">$2,500–$10,000</strong> cosmetic refresh range. Ideas #1, #2,
        #5 (as a full retile), #7, and #12 involve tearing into the shower or wall assembly, which moves
        the project into the{" "}
        <strong className="text-charcoal">$12,000–$30,000</strong> standard full remodel range. DFW cost
        per square foot typically runs $70–$250. Every project gets a free, line-item estimate before
        anything is torn out, so you know which range you&apos;re in before you commit.
      </p>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Turn an idea into a real, line-item estimate</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          We&apos;ll walk your bathroom, tell you which of these ideas fit the space and the plumbing you
          already have, and give you a free estimate — no obligation. We respond to every request within
          one business day.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button size="lg" variant="white" asChild>
            <a href={telHref(company.phone)}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {company.phoneDisplay}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link href="/contact">Request a Free Estimate</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
