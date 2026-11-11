import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import LockerBank from "./LockerBank";

const Hero = () => {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: [0.2, 0.7, 0.2, 1] as const, delay },
        };

  return (
    <section className="relative overflow-hidden pt-16 md:pt-20">
      <div className="container">
        <div className="grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-7">
            <motion.p {...rise(0.05)} className="label mb-8 flex items-center gap-3 text-foreground">
              <span className="h-2.5 w-2.5 bg-signal" aria-hidden />
              Drop · Lock · and Go
            </motion.p>

            <motion.h1
              {...rise(0.12)}
              className="font-condensed text-[3.4rem] font-extrabold leading-[0.88] tracking-[-0.015em] text-foreground sm:text-7xl lg:text-[6.4rem] xl:text-[7.2rem]"
            >
              Safe, convenient lockers at <span className="tape">your favorite spots.</span>
            </motion.h1>

            <motion.p
              {...rise(0.2)}
              className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Store your valuables securely while you enjoy the night. Pay by the hour, unlock via OTP. No
              worries, just good times.
            </motion.p>

            <motion.div {...rise(0.28)} className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center">
              <a href="#why-us" className="btn-ink self-start">
                Learn More
                <ArrowDown className="h-4 w-4" />
              </a>

              <dl className="flex divide-x-2 divide-foreground border-2 border-foreground self-start">
                <div className="px-4 py-2.5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Access</dt>
                  <dd className="font-condensed text-2xl font-bold leading-tight text-foreground">24/7</dd>
                </div>
                <div className="px-4 py-2.5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Per Hour
                  </dt>
                  <dd className="font-condensed text-2xl font-bold leading-tight text-foreground">KES 100</dd>
                </div>
              </dl>
            </motion.div>
          </div>

          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const, delay: 0.2 },
                })}
            className="lg:col-span-5"
          >
            <LockerBank />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
