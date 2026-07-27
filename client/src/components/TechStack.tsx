import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function TechStack() {
  const technologies = [
    { name: "Python", icon: "🐍", category: "Language" },
    { name: "JavaScript", icon: "⚡", category: "Language" },
    { name: "TypeScript", icon: "📘", category: "Language" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "Kubernetes", icon: "☸️", category: "DevOps" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Linux", icon: "🐧", category: "OS" },
    { name: "PyTorch", icon: "🔥", category: "AI/ML" },
    { name: "TensorFlow", icon: "📊", category: "AI/ML" },
    { name: "FastAPI", icon: "⚙️", category: "Framework" },
    { name: "Next.js", icon: "▲", category: "Framework" },
    { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Tools and technologies I work with daily
            </p>
          </div>

          {/* Tech Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="p-6 bg-background border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center justify-center text-center cursor-pointer">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                  <p className="text-xs text-foreground/60">{tech.category}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
