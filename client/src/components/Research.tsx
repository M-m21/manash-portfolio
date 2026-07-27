import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function Research() {
  const researchItems = [
    {
      title: "Prompt Engineering Best Practices for LLMs",
      type: "Research Paper",
      date: "2024",
      description: "Comprehensive study on effective prompt engineering techniques for large language models",
      tags: ["LLMs", "Prompt Engineering", "AI"],
      link: "#",
    },
    {
      title: "Vulnerability Analysis in Modern Web Frameworks",
      type: "Technical Article",
      date: "2024",
      description: "Deep dive into common security vulnerabilities and mitigation strategies",
      tags: ["Security", "Web Development", "OWASP"],
      link: "#",
    },
    {
      title: "Building Scalable AI Systems",
      type: "Blog Post",
      date: "2023",
      description: "Lessons learned from building production-grade AI systems at scale",
      tags: ["AI", "Architecture", "DevOps"],
      link: "#",
    },
    {
      title: "Cybersecurity in the Age of AI",
      type: "Conference Talk",
      date: "2023",
      description: "Exploring the intersection of cybersecurity and artificial intelligence",
      tags: ["Security", "AI", "Future"],
      link: "#",
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
    <section id="research" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Research & Publications</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Sharing knowledge through research papers, technical articles, and conference talks
            </p>
          </motion.div>

          {/* Research Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchItems.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {item.type}
                      </Badge>
                      <span className="text-sm text-foreground/60">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-6 flex-grow">{item.description}</p>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50 text-secondary-foreground border-0 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
