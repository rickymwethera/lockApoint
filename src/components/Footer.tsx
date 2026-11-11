import { Facebook, Instagram, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import Reveal from "./Reveal";

const quickLinks = [
  { label: "How It Works", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/lockapoint/", label: "Instagram" },
];

const linkCls = "text-paper/70 transition-colors hover:text-signal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ink text-paper dark:border-t-2 dark:border-signal">
      <div className="container pt-20 lg:pt-28">
        {/* headline row */}
        <Reveal className="grid gap-8 border-b border-paper/15 pb-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-paper/60">
              <span className="text-paper">04</span>
              <span className="h-px w-8 bg-paper/40" aria-hidden />
              Contact Us
            </p>
            <a
              href="mailto:lockapoint@gmail.com"
              className="group inline-flex flex-wrap items-baseline gap-x-4 font-condensed text-4xl font-extrabold leading-none tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="underline decoration-signal decoration-[3px] underline-offset-[10px] transition-colors group-hover:text-signal">
                lockapoint@gmail.com
              </span>
              <ArrowUpRight className="h-8 w-8 text-signal transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-12 sm:w-12" />
            </a>
          </div>
          <p className="max-w-xs text-paper/70 lg:col-span-4 lg:justify-self-end">
            Secure locker solutions for clubs, malls, and events across Kenya. Your valuables, safely stored.
          </p>
        </Reveal>

        {/* columns */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-signal">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkCls}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-signal">Reach Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:lockapoint@gmail.com" className={linkCls}>
                  lockapoint@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254700123456" className={linkCls}>
                  +254 700 123 456
                </a>
              </li>
              <li className="text-paper/70">Nairobi, Kenya</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-signal">Hours</h4>
            <dl className="space-y-3 text-paper/70">
              <div className="flex justify-between gap-6 border-b border-paper/10 pb-3">
                <dt>Locker access</dt>
                <dd className="font-medium text-paper">24/7</dd>
              </div>
              <div>
                <dt className="mb-2">Support hours:</dt>
                <dd className="flex justify-between gap-6 font-mono text-sm">
                  <span>Mon - Fri</span>
                  <span>8AM - 8PM</span>
                </dd>
                <dd className="mt-1 flex justify-between gap-6 font-mono text-sm">
                  <span>Sat - Sun</span>
                  <span>10AM - 6PM</span>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-signal">Follow</h4>
            <ul className="flex gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center border border-paper/25 transition-colors hover:border-signal hover:bg-signal hover:text-ink"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* giant wordmark */}
      <div className="container" aria-hidden>
        <Logo className="w-full text-paper" />
      </div>

      <div className="container">
        <div className="mt-8 flex flex-col gap-4 border-t border-paper/15 py-8 text-sm text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.1em]">
            © {currentYear} LockAPoint. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-paper">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-paper">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
