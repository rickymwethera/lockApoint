import { Shield, Zap, CreditCard, MapPin, Clock, Headphones } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Store and retrieve in seconds. No queues, no waiting, no hassle.",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Pay conveniently with M-Pesa or card. Only pay for the hours you use.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Find us at the best clubs, malls, and event venues across Nairobi.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Access your locker anytime. We're open 24/7 at most locations.",
  },
  {
    icon: Headphones,
    title: "Support Team",
    description: "Our friendly team is always ready to help. Reach us via call or WhatsApp.",
  },
];

const cell = "border-foreground/20 p-8 lg:p-10 border-t sm:[&:nth-child(2n)]:border-l lg:[&:nth-child(2n)]:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-32">
      <div className="container">
        <SectionHead
          index="03"
          label="Why Choose Us"
          title={
            <>
              The smart way to <span className="tape">secure your stuff.</span>
            </>
          }
        >
          Whether you're dancing the night away or shopping with friends, LockAPoint keeps your valuables safe so
          you can focus on having fun.
        </SectionHead>

        <ul className="mt-16 grid border-b-2 border-foreground sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal as="li" key={feature.title} delay={(index % 3) * 0.06} className={cell}>
              <div className="flex items-center justify-between">
                <span className="label">03.{index + 1}</span>
                <feature.icon className="h-5 w-5 text-foreground" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-10 font-semicondensed text-2xl font-bold text-foreground">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{feature.description}</p>
            </Reveal>
          ))}

          {/* Trust badge, as a stamped plate in the last cell */}
          <Reveal as="li" delay={0.12} className={`${cell} bg-signal text-ink`}>
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.14em]">Guarantee</span>
                <Shield className="h-5 w-5" strokeWidth={2} aria-hidden />
              </div>
              <div>
                <p className="font-condensed text-6xl font-black leading-none">100% Secure</p>
                <p className="mt-3 font-mono text-sm uppercase tracking-[0.08em]">Insured & monitored 24/7</p>
              </div>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
