import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-hero overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display tracking-[0.3em] uppercase text-sm sm:text-base text-accent font-bold mb-4"
          >
            Drop · Lock · and Go
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Safe, Convenient Lockers at{" "}
            <span className="text-gradient-primary">Your Favorite Spots</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            Store your valuables securely while you enjoy the night — pay by the hour, unlock via OTP. No worries, just good times.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Find Locations
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-12 justify-center"
          >
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">15+</p>
              <p className="text-muted-foreground text-sm">Locations</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">24/7</p>
              <p className="text-muted-foreground text-sm">Access</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">KES 50</p>
              <p className="text-muted-foreground text-sm">Per Hour</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
