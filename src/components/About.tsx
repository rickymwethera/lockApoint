import { motion } from "framer-motion";
import { Lock, Smartphone, CreditCard, CheckCircle } from "lucide-react";

const About = () => {
  const steps = [
    {
      icon: Lock,
      title: "Find a Locker",
      description: "Visit any of our partner locations and find an available secure locker.",
    },
    {
      icon: CreditCard,
      title: "Pay & Store",
      description: "Pay conveniently via M-Pesa or card. Store your valuables safely.",
    },
    {
      icon: Smartphone,
      title: "Unlock with OTP",
      description: "Receive a unique OTP code. Enter it to unlock your locker anytime.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Secure, <span className="text-gradient-primary">Seamless</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            LockAPoint makes it easy to secure your belongings in just three simple steps. 
            No apps to download, no complicated sign-ups.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow group">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-display font-bold text-accent-foreground">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "No app required",
              "24/7 availability",
              "Secure OTP access",
              "M-Pesa & card payment",
            ].map((feature, index) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
