import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Journey() {
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
    <section id="journey" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Past achievements, present focus, and future aspirations
            </p>
          </motion.div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Past */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-background border-border/50 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <h3 className="text-2xl font-bold text-foreground">Past</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Education</h4>
                    <p className="text-sm text-foreground/80">B.S. in Computer Science with focus on AI and Security</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Internships</h4>
                    <p className="text-sm text-foreground/80">Security Research Intern at leading tech companies</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Research</h4>
                    <p className="text-sm text-foreground/80">Published papers on AI safety and cybersecurity</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Achievements</h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      
                      <li>• Security certifications</li>
                      <li>• CTF competitions won</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Present */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-background border-primary/50 border-2 h-full relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Now</Badge>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <h3 className="text-2xl font-bold text-foreground">Present</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Current Projects</h4>
                    <p className="text-sm text-foreground/80">Building AI systems and security tools</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Skills</h4>
                    <p className="text-sm text-foreground/80">AI/ML, Full-stack development, Security research</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Learning</h4>
                    <p className="text-sm text-foreground/80">Advanced LLM fine-tuning, Kubernetes, Security engineering</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Goals</h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Launch AI Research Lab</li>
                      <li>• Contribute to open source</li>
                      <li>• Publish research papers</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Future */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-background border-border/50 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <h3 className="text-2xl font-bold text-foreground">Future</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">AI Engineer Path</h4>
                    <p className="text-sm text-foreground/80">Leading AI research and development initiatives</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Cybersecurity Expert</h4>
                    <p className="text-sm text-foreground/80">Advanced threat intelligence and security architecture</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Researcher</h4>
                    <p className="text-sm text-foreground/80">Contributing to AI safety and security research</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Entrepreneur</h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Building AI-powered products</li>
                      <li>• Starting security-focused startup</li>
                      <li>• Mentoring next generation</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
