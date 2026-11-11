import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import Logo from "./Logo";

const navLinks = [
  { href: "#about", label: "How It Works", index: "01" },
  { href: "#locations", label: "Locations", index: "02" },
  { href: "#why-us", label: "Why Us", index: "03" },
  { href: "#contact", label: "Contact", index: "04" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-background transition-[border-color] duration-200 border-b ${
        scrolled || isOpen ? "border-foreground" : "border-transparent"
      }`}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#" className="text-foreground" aria-label="LockAPoint, back to top">
            <Logo tagline={false} className="h-7 w-auto md:h-8" />
          </a>

          <nav className="hidden items-center md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-baseline gap-2 px-4 py-2 text-[15px] font-medium text-foreground"
              >
                <span className="font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">
                  {link.index}
                </span>
                <span className="bg-[linear-gradient(hsl(var(--signal)),hsl(var(--signal)))] bg-[length:0%_6px] bg-[position:0_88%] bg-no-repeat transition-[background-size] duration-200 group-hover:bg-[length:100%_6px]">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="grid h-10 w-10 place-items-center border border-foreground/25 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="grid h-10 w-10 place-items-center border border-foreground/25 text-foreground md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-foreground/15 md:hidden"
            aria-label="Mobile"
          >
            <div className="container py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-baseline gap-4 border-b border-foreground/15 py-4 text-foreground"
                >
                  <span className="font-mono text-xs text-muted-foreground">{link.index}</span>
                  <span className="font-condensed text-3xl font-bold">{link.label}</span>
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="btn-ink mt-6 w-full justify-between">
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
