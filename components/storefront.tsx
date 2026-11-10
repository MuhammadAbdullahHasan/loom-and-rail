"use client";

import * as React from "react";
import { ClothingRailHero, GarmentPreview } from "@/components/ui/product-rail-gallery";
import { NEW_IN, RAIL } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import CREDITS from "@/lib/credits.json";

const NAV = ["New in", "Men", "Women", "Journal"];
const TICKER = ["Natural fibres", "Cut in Karachi", "Free repairs for a year", "Easy 7-day exchange", "Cash on delivery"];

export function Storefront() {
  const [bag, setBag] = React.useState(0);
  const [bump, setBump] = React.useState(false);
  const [added, setAdded] = React.useState(null as string | null);
  const [email, setEmail] = React.useState("");
  const [joined, setJoined] = React.useState(false);

  const add = (id: string) => {
    setBag((n) => n + 1);
    setAdded(id);
    setBump(true);
    window.setTimeout(() => setBump(false), 350);
    window.setTimeout(() => setAdded((a) => (a === id ? null : a)), 1600);
  };

  return (
    <>
      <div className="bg-foreground px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-background">
        The Autumn Rail is in &middot; Cash on delivery across Pakistan
      </div>

      <header className="sticky top-0 z-30 border-b border-line/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <nav className="hidden gap-7 text-sm md:flex" aria-label="Main">
            {NAV.map((n) => (
              <a key={n} href="#new" className="group relative py-1 text-foreground/80 transition-colors hover:text-foreground">
                {n}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <a href="#" className="font-display text-2xl tracking-tight md:absolute md:left-1/2 md:-translate-x-1/2">
            Loom <span className="italic text-accent">&amp;</span> Rail
          </a>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Search" className="grid size-10 place-items-center rounded-full transition-colors hover:bg-muted">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            </button>
            <button type="button" aria-label={`Bag, ${bag} items`} className="relative grid size-10 place-items-center rounded-full transition-colors hover:bg-muted">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></svg>
              {bag > 0 && (
                <span className={cn("absolute -right-0.5 -top-0.5 grid size-5 place-items-center rounded-full bg-accent text-[10px] font-bold text-white transition-transform duration-300", bump && "scale-125")}>
                  {bag}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero rail */}
        <section
          className="relative overflow-hidden bg-background pb-12 pt-14 text-foreground sm:pt-20"
          style={{ ["--background" as string]: "#121110", ["--foreground" as string]: "#f3eee6", ["--muted" as string]: "#1f1d1a", ["--muted-foreground" as string]: "#a8a094", ["--line" as string]: "#2c2925", ["--card" as string]: "#1a1816" }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(55%_45%_at_50%_55%,#2a2622_0%,transparent_70%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
            <ClothingRailHero
              items={RAIL}
              eyebrow="New season · Ten pieces on the rail"
              heading="The Autumn Rail"
              caption="Brush along the rail, slide a hanger, tap a piece to see the back."
              autoplay
              interval={2800}
              hanger="none"
              action={
                <a href="#new" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                  Shop the rail
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              }
            />
          </div>
        </section>

        {/* Ticker */}
        <div className="overflow-hidden border-y border-line bg-card py-4" aria-hidden="true">
          <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl italic text-foreground/80">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="flex items-center gap-12">{t}<span className="text-accent not-italic">✦</span></span>
            ))}
          </div>
        </div>

        {/* New in */}
        <section id="new" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Just landed</p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">New in</h2>
            </div>
            <a href="#new" className="text-sm font-semibold underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground">View all</a>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
            {NEW_IN.map((p, i) => (
              <li key={p.id} className="rise group" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="relative overflow-hidden rounded-xl bg-card px-6 pb-2 pt-6 transition-colors duration-500 group-hover:bg-muted">
                  <GarmentPreview item={p} hanger="none" className="mx-auto w-full max-w-[220px] transition-transform duration-500 ease-out group-hover:-rotate-2 group-hover:scale-[1.04]" />
                  <button
                    type="button"
                    onClick={() => add(p.id)}
                    className={cn(
                      "absolute inset-x-3 bottom-3 rounded-full py-2.5 text-xs font-semibold transition-all duration-300",
                      added === p.id ? "bg-accent text-white" : "bg-foreground text-background sm:translate-y-14 sm:group-hover:translate-y-0 sm:group-focus-within:translate-y-0",
                    )}
                  >
                    {added === p.id ? "Added ✓" : "Add to bag"}
                  </button>
                </div>
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold">{p.name}</p>
                    <div className="mt-1.5 flex gap-1.5">
                      {p.colours.map((c) => <span key={c} className="size-3 rounded-full ring-1 ring-black/10" style={{ background: c }} />)}
                    </div>
                  </div>
                  <p className="shrink-0 text-sm text-muted-foreground">{p.tag}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Story */}
        <section className="bg-foreground text-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <h2 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl">
              Fewer clothes.<br /><span className="italic text-[#d79a73]">Better</span> ones.
            </h2>
            <div className="grid gap-8">
              {[
                ["Natural fibres", "Cotton, linen and wool blends that breathe in the heat and soften with every wash."],
                ["Cut to last", "Double-stitched seams and honest patterns. No trends that expire in a month."],
                ["Repairs for a year", "Lost a button or split a seam? Send it back and we fix it, free."],
              ].map(([t, d], i) => (
                <div key={t} className="flex gap-5 border-t border-background/15 pt-6">
                  <span className="font-display text-xl italic text-[#d79a73]">0{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-background/70">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-8">
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">First pick of the next rail</h2>
          <p className="mt-3 text-muted-foreground">One email when a new drop lands. Nothing else.</p>
          {joined ? (
            <p className="rise mt-8 inline-block rounded-full bg-muted px-6 py-3 text-sm font-semibold">You&rsquo;re on the list. See you at the next drop.</p>
          ) : (
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
              onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setJoined(true); }}
            >
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 flex-1 rounded-full border border-line bg-card px-5 text-base outline-none transition-colors focus:border-foreground"
              />
              <button type="submit" className="h-12 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-lg">
                Join
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:px-8">
          <p className="font-display text-xl text-foreground">Loom <span className="italic text-accent">&amp;</span> Rail</p>
          <p>Demo storefront &middot; &copy; {new Date().getFullYear()}</p>
        </div>
        <Credits />
      </footer>
    </>
  );
}

function Credits() {
  return (
    <details className="mx-auto max-w-7xl px-4 pb-8 text-xs text-muted-foreground sm:px-8">
      <summary className="cursor-pointer select-none hover:text-foreground">Photo credits</summary>
      <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
        {CREDITS.map((c) => (
          <li key={c.name}>
            <a href={c.page} target="_blank" rel="noopener noreferrer" className="underline decoration-current/30 underline-offset-2 hover:text-foreground">{c.title}</a>
            {" "}by {c.author} &middot; {c.license}
          </li>
        ))}
      </ul>
    </details>
  );
}
