import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logoDark from "@/assets/lockapoint-logo-dark.svg.asset.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "How It Works", href: "#about" },
    { label: "Locations", href: "#locations" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer id="contact" className="bg-[hsl(0_0%_4%)] text-white pt-16 lg:pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <a href="#" className="inline-block mb-4">
              <img src={logoDark.url} alt="LockAPoint" className="h-14 w-auto" />
            </a>
            <p className="text-white/70 mb-2 max-w-xs font-display tracking-widest uppercase text-xs text-[hsl(43_100%_57%)]">
              Drop · Lock · and Go
            </p>
            <p className="text-white/70 mb-6 max-w-xs">
              Secure locker solutions for clubs, malls, and events across Kenya.
              Your valuables, safely stored.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(43_100%_57%)] hover:text-[hsl(0_0%_4%)] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[hsl(43_100%_57%)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:hello@lockapoint.co.ke"
                  className="text-white/70 hover:text-[hsl(43_100%_57%)] transition-colors"
                >
                  hello@lockapoint.co.ke
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+254700123456"
                  className="text-white/70 hover:text-[hsl(43_100%_57%)] transition-colors"
                >
                  +254 700 123 456
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-white/70">Nairobi, Kenya</span>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Hours</h4>
            <div className="space-y-2 text-white/70">
              <p>Locker access: <span className="text-white font-medium">24/7</span></p>
              <p>Support hours:</p>
              <p>Mon - Fri: 8AM - 8PM</p>
              <p>Sat - Sun: 10AM - 6PM</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {currentYear} LockAPoint. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
