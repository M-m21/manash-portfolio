import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";

export default function AILab() {
  const labItems = [
    {
      title: "Prompt Engineering",
      description: "Advanced techniques for crafting effective prompts for LLMs",
      status: "active",
    },
    {
      title: "AI Agents",
      description: "Building autonomous agents with reasoning and planning capabilities",
      status: "active",
    },
    {
      title: "LLM Fine-tuning",
      description: "Custom model training and optimization strategies",
      status: "active",
    },
    {
      title: "RAG Systems",
      description: "Retrieval-Augmented Generation for knowledge-enhanced AI",
      status: "active",
    },
    {
      title: "Vision Models",
      description: "Computer vision and multimodal AI research",
      status: "active",
    },
    {
      title: "AI Benchmarking",
      description: "Comprehensive evaluation frameworks for AI systems",
      status: "coming",
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
    <section id="ai-lab" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Research Lab</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Exploring the frontiers of artificial intelligence through research and experimentation
            </p>
          </motion.div>

          {/* Lab Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labItems.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Card
                  className={`p-6 h-full flex flex-col bg-background border-border/50 hover:border-primary/50 transition-all duration-300 ${
                    item.status === "coming" ? "opacity-75" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-foreground flex-1">{item.title}</h3>
                    {item.status === "coming" && (
                      <Lock className="w-5 h-5 text-foreground/50 ml-2" />
                    )}
                  </div>

                  <p className="text-foreground/80 mb-6 flex-grow">{item.description}</p>

                  <div className="flex items-center gap-2">
                    {item.status === "active" ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm text-green-600 font-medium">Active</span>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <span className="text-sm text-yellow-600 font-medium">Coming Soon</span>
                      </>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Future AI Observatory */}
          <motion.div variants={itemVariants} className="mt-16 p-8 md:p-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary text-primary-foreground">Coming Soon</Badge>
              <h3 className="text-2xl font-bold text-foreground">Future AI Observatory</h3>
            </div>
            <p className="text-foreground/80 mb-6">
              An advanced platform for AI model comparison, benchmark tracking, and community rankings. Features include real-time model evaluation, hallucination analysis, energy efficiency metrics, and comprehensive safety evaluations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Model Comparison", "Benchmarking", "Safety Eval", "Community Rankings", "Energy Tracking", "Latency Analysis", "Hallucination Detection", "Roadmaps"].map((feature) => (
                <div key={feature} className="p-3 bg-background/50 rounded border border-border/50 text-center text-sm font-medium text-foreground/80">
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
