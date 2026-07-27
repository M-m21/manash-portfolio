import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function CyberLab() {
  const cyberTopics = [
    {
      title: "Network Security",
      description: "Advanced network protocols, firewalls, and intrusion detection systems",
      icon: "🔒",
    },
    {
      title: "Penetration Testing",
      description: "Ethical hacking and vulnerability assessment methodologies",
      icon: "🎯",
    },
    {
      title: "Malware Analysis",
      description: "Reverse engineering and behavioral analysis of malicious software",
      icon: "🦠",
    },
    {
      title: "Digital Forensics",
      description: "Evidence collection and analysis from digital systems",
      icon: "🔍",
    },
    {
      title: "OWASP & Web Security",
      description: "Top 10 vulnerabilities and secure coding practices",
      icon: "🌐",
    },
    {
      title: "Capture The Flag",
      description: "CTF competitions and security challenge writeups",
      icon: "🚩",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="cyber-lab" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">Cybersecurity Lab</h2>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Educational and responsible security research focused on protecting systems and promoting cybersecurity awareness
            </p>
            <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm text-foreground/80">
                <strong>Important:</strong> All research and tools are developed for educational purposes and responsible security research only. No offensive hacking or unauthorized access.
              </p>
            </div>
          </motion.div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {cyberTopics.map((topic) => (
              <motion.div key={topic.title} variants={itemVariants}>
                <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{topic.title}</h3>
                  <p className="text-foreground/80">{topic.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Resources Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Learning Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Security Blogs", count: "12+" },
                { label: "Research Notes", count: "25+" },
                { label: "CTF Writeups", count: "8+" },
                { label: "Learning Progress", count: "95%" },
              ].map((resource) => (
                <Card key={resource.label} className="p-6 bg-card border-border/50 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{resource.count}</p>
                  <p className="text-foreground/80 font-medium">{resource.label}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
