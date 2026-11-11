import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const steps = [
  {
    title: "Find a Locker",
    description: "Visit any of our partner locations and find an available secure locker.",
  },
  {
    title: "Pay & Store",
    description: "Pay conveniently via M-Pesa or card. Store your valuables safely.",
  },
  {
    title: "Unlock with OTP",
    description: "Receive a unique OTP code. Enter it to unlock your locker anytime.",
  },
];

const features = ["No app required", "24/7 availability", "Secure OTP access", "M-Pesa & card payment"];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container">
        <SectionHead
          index="01"
          label="How It Works"
          title={
            <>
              Simple, secure, <span className="tape">seamless.</span>
            </>
          }
        >
          LockAPoint makes it easy to secure your belongings in just three simple steps. No apps to download,
          no complicated sign-ups.
        </SectionHead>

        <ol className="mt-16 grid border-y-2 border-foreground md:grid-cols-3 lg:mt-20">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.08}
              className="group relative border-foreground/20 px-0 py-10 md:px-8 md:py-12 [&:not(:first-child)]:border-t md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-t-0 md:first:pl-0 md:last:pr-0"
            >
              <span
                className="absolute left-0 top-[-2px] h-1.5 w-0 bg-signal transition-[width] duration-300 group-hover:w-full"
                aria-hidden
              />
              <div className="flex items-baseline justify-between">
                <span className="font-condensed text-[5.5rem] font-black leading-none tracking-tight text-foreground lg:text-[7rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="label">Step {index + 1}/3</span>
              </div>
              <h3 className="mt-8 font-semicondensed text-2xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-muted-foreground">{step.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <ul className="mt-10 grid gap-px bg-ink text-ink sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 bg-signal px-5 py-5">
                <Check className="h-5 w-5 shrink-0" strokeWidth={2.5} aria-hidden />
                <span className="font-mono text-sm font-medium uppercase tracking-[0.08em]">{feature}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
