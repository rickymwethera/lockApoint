import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const venues = [
  {
    code: "A",
    title: "Nightclubs & Bars",
    description:
      "Give your guests peace of mind so they can dance the night away without worrying about their phones, keys or wallets.",
  },
  {
    code: "B",
    title: "Shopping Malls",
    description:
      "Let shoppers move freely without juggling bags. A premium amenity that keeps people in your venue longer.",
  },
  {
    code: "C",
    title: "Events & Festivals",
    description: "From concerts to conferences, our pop-up lockers add safety and convenience to any event.",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 lg:py-32">
      <div className="container">
        <SectionHead
          index="02"
          label="Coming Soon"
          title={
            <>
              Built for every <span className="tape">kind of venue.</span>
            </>
          }
        >
          We're rolling out across Nairobi's best spots. Run a venue? Partner with us and offer your guests a
          premium, secure experience.
        </SectionHead>

        <ul className="mt-16 border-b-2 border-foreground lg:mt-20">
          {venues.map((venue, index) => (
            <Reveal
              as="li"
              key={venue.title}
              delay={index * 0.06}
              className="group grid gap-4 border-t border-foreground/20 py-8 transition-colors duration-200 first:border-t-2 first:border-foreground hover:bg-signal hover:text-ink md:grid-cols-12 md:items-baseline md:gap-8 md:px-4 lg:py-10"
            >
              <span className="font-mono text-sm text-muted-foreground group-hover:text-ink md:col-span-1">
                {venue.code}/{venues.length}
              </span>
              <h3 className="font-condensed text-4xl font-extrabold leading-none tracking-tight text-foreground group-hover:text-ink sm:text-5xl md:col-span-6 lg:col-span-7 lg:text-6xl">
                {venue.title}
              </h3>
              <p className="max-w-md leading-relaxed text-muted-foreground group-hover:text-ink md:col-span-5 lg:col-span-4">
                {venue.description}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-16 lg:mt-20">
          <div className="relative overflow-hidden bg-ink text-paper dark:border-2 dark:border-t-0 dark:border-paper/15 dark:bg-card">
            <div className="hazard h-3" aria-hidden />
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:items-end lg:p-16">
              <div className="lg:col-span-8">
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-signal">For venue owners</p>
                <h3 className="font-condensed text-5xl font-extrabold leading-[0.92] sm:text-6xl lg:text-7xl">
                  Want LockAPoint at your venue?
                </h3>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
                  We're actively partnering with clubs, malls and event organizers across Kenya. Let's talk.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a href="#contact" className="btn-signal">
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Locations;
