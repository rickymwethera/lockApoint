import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadProps = {
  index: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
};

/** Numbered section header: stencil label, big condensed heading, lede on the right. */
const SectionHead = ({ index, label, title, children }: SectionHeadProps) => (
  <div className="grid gap-8 border-t-2 border-foreground pt-6 lg:grid-cols-12 lg:gap-12">
    <Reveal className="lg:col-span-7">
      <p className="label mb-6 flex items-center gap-3">
        <span className="text-foreground">{index}</span>
        <span className="h-px w-8 bg-foreground/40" aria-hidden />
        <span>{label}</span>
      </p>
      <h2 className="font-condensed text-5xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground sm:text-6xl lg:text-7xl">
        {title}
      </h2>
    </Reveal>
    {children && (
      <Reveal delay={0.08} className="lg:col-span-5 lg:self-end">
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground">{children}</p>
      </Reveal>
    )}
  </div>
);

export default SectionHead;
