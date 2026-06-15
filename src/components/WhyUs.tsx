import { motion } from "framer-motion";
import { Shield, Zap, CreditCard, MapPin, Clock, Headphones } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Heavy-duty steel lockers with secure OTP access. Your valuables are protected 24/7.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Store and retrieve in seconds. No queues, no waiting, no hassle.",
    },
    {
      icon: CreditCard,
      title: "Easy Payment",
      description: "Pay conveniently with M-Pesa or card. Only pay for the hours you use.",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Find us at the best clubs, malls, and event venues across Nairobi.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Access your locker anytime. We're open 24/7 at most locations.",
    },
    {
      icon: Headphones,
      title: "Support Team",
      description: "Our friendly team is always ready to help. Reach us via call or WhatsApp.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Smart Way to{" "}
            <span className="text-gradient-primary">Secure Your Stuff</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're dancing the night away or shopping with friends, 
            LockAPoint keeps your valuables safe so you can focus on having fun.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card shadow-card border border-border">
            <Shield className="w-10 h-10 text-primary" />
            <div className="text-left">
              <p className="font-display font-bold text-foreground">100% Secure</p>
              <p className="text-sm text-muted-foreground">Insured & monitored 24/7</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
