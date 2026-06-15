import { motion } from "framer-motion";
import { MapPin, Clock, Lock } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      name: "Beer District",
      type: "Entertainment",
      lockers: 20,
      image: "🍺",
    },
    {
      name: "Sarit Center",
      type: "Shopping Mall",
      lockers: 30,
      image: "🛍️",
    },
    {
      name: "Westgate Mall",
      type: "Shopping Mall",
      lockers: 25,
      image: "🏬",
    },
    {
      name: "K1 Klubhouse",
      type: "Entertainment",
      lockers: 15,
      image: "🎶",
    },
    {
      name: "Garden City",
      type: "Shopping Mall",
      lockers: 20,
      image: "🌳",
    },
    {
      name: "The Hub Karen",
      type: "Shopping Mall",
      lockers: 18,
      image: "🏪",
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
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lockers Near <span className="text-gradient-primary">You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're expanding across Nairobi! Find a LockAPoint locker at your favorite spots.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300"
            >
              {/* Image/Icon Area */}
              <div className="h-32 bg-gradient-primary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                <span className="text-6xl">{location.image}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {location.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{location.type}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{location.lockers} lockers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            More locations coming soon! Want LockAPoint at your venue?{" "}
            <a href="#contact" className="text-accent font-medium hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
