import { motion } from "framer-motion";
import { Building2, Music, PartyPopper, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Locations = () => {
  const venues = [
    {
      icon: Music,
      title: "Nightclubs & Bars",
      description: "Give your guests peace of mind so they can dance the night away without worrying about their phones, keys or wallets.",
    },
    {
      icon: Building2,
      title: "Shopping Malls",
      description: "Let shoppers move freely without juggling bags. A premium amenity that keeps people in your venue longer.",
    },
    {
      icon: PartyPopper,
      title: "Events & Festivals",
      description: "From concerts to conferences, our pop-up lockers add safety and convenience to any event.",
    },
  ];

  return (
    <section id="locations" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground font-medium text-sm mb-4">
            Coming Soon
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for Every <span className="text-gradient-primary">Kind of Venue</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're rolling out across Nairobi's best spots. Run a venue? Partner with us and offer your guests a premium, secure experience.
          </p>
        </motion.div>

        {/* Venue Types */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <venue.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {venue.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {venue.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border border-border rounded-3xl p-8 lg:p-12 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Want LockAPoint at your venue?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We're actively partnering with clubs, malls and event organizers across Kenya. Let's talk.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Get in touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
