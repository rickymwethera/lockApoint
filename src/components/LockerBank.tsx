import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const CODE = "4827";
const DOORS = ["A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08", "A09", "A10", "A11", "A12"];
const ACTIVE = 5; // A06 — the door you're "using"

/**
 * Drawn locker bank for the hero. The yellow door has a little keypad screen
 * that types an OTP, then unlocks and swings open. Loops every few seconds;
 * holds still on the unlocked frame for reduced-motion users.
 */
const LockerBank = () => {
  const reduce = useReducedMotion();
  // step 0..4 = digits entered, 5 = unlocked, 6 = open
  const [step, setStep] = useState(reduce ? 6 : 0);

  useEffect(() => {
    if (reduce) {
      setStep(6);
      return;
    }
    const delays = [900, 380, 380, 380, 500, 700, 2600];
    const t = window.setTimeout(() => setStep((s) => (s + 1) % 7), delays[step]);
    return () => window.clearTimeout(t);
  }, [step, reduce]);

  const typed = CODE.slice(0, Math.min(step, 4));
  const unlocked = step >= 5;
  const open = step >= 6;

  return (
    <figure className="relative mx-auto w-full max-w-[480px]">
      {/* cabinet */}
      <div className="relative border-2 border-foreground bg-card p-3 text-foreground sm:p-4">
        {/* top plate */}
        <div className="mb-3 flex items-center justify-between border-b-2 border-foreground pb-3 sm:mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]">
            Bank A · 12 units
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]">
            <span className="h-2 w-2 rounded-full bg-[#3BA55C]" aria-hidden />
            Online
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
          {DOORS.map((id, i) => {
            const isActive = i === ACTIVE;
            return (
              <div key={id} className="relative aspect-[3/4]" style={{ perspective: "700px" }}>
                {/* the cavity you see when the door is open */}
                {isActive && (
                  <div className="absolute inset-0 border-2 border-foreground bg-foreground/90">
                    <div className="absolute inset-x-3 bottom-3 h-2 bg-background/20" />
                  </div>
                )}
                <div
                  className={`absolute inset-0 flex flex-col justify-between border-2 border-foreground p-2 transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] sm:p-2.5 ${
                    isActive ? "bg-signal text-ink" : "bg-background"
                  }`}
                  style={
                    isActive
                      ? {
                          transformOrigin: "left center",
                          transform: open ? "rotateY(-38deg)" : "rotateY(0deg)",
                        }
                      : undefined
                  }
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] font-medium leading-none sm:text-[11px]">{id}</span>
                    <span className="vents h-3 w-5 opacity-30 sm:w-6" aria-hidden />
                  </div>

                  {isActive ? (
                    <div className="space-y-1.5">
                      <div className="bg-ink px-1.5 py-1 font-mono text-[11px] leading-none tracking-[0.3em] text-signal sm:text-[13px]">
                        {(typed + "····").slice(0, 4)}
                      </div>
                      <div className="font-mono text-[8px] font-semibold uppercase leading-none tracking-[0.12em] sm:text-[9px]">
                        {unlocked ? "Unlocked" : "Enter OTP"}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <span className="block h-4 w-1.5 bg-foreground/70 sm:h-5" aria-hidden />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* plinth */}
        <div className="mt-3 flex items-center justify-between border-t-2 border-foreground pt-3 sm:mt-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]">Pay · M-Pesa / Card</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]">KES 100/hr</span>
        </div>
      </div>
      <div className="hazard mx-3 h-2.5 border-x-2 border-b-2 border-foreground sm:mx-4" aria-hidden />

      <figcaption className="sr-only">
        Illustration of a LockAPoint locker bank. One locker accepts a one-time code and unlocks.
      </figcaption>
    </figure>
  );
};

export default LockerBank;
