import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Research Lab",
      description: "Comprehensive platform for AI model evaluation, benchmarking, and research. Features LLM comparison, vision model testing, and prompt engineering tools.",
      image: "https://images.unsplash.com/photo-1677442d019cecf8f6e52cce8cef78dca6f2e4ae?w=800&h=500&fit=crop",
      technologies: ["React", "Python", "LLMs", "FastAPI", "PostgreSQL"],
      achievements: [
        "Processed 50k+ model evaluations",
        "95% accuracy in benchmarking",
        "Real-time model comparison",
      ],
      links: {
        github: "https://github.com",
        demo: "https://example.com",
      },
    },
    {
      title: "Cybersecurity Toolkit",
      description: "Open-source collection of security tools for penetration testing, vulnerability assessment, and network analysis. Used by security professionals worldwide.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13e493a?w=800&h=500&fit=crop",
      technologies: ["Python", "Linux", "Networking", "Security", "CLI"],
      achievements: [
        "10k+ GitHub stars",
        "Used by 500+ organizations",
        "Active community contributions",
      ],
      links: {
        github: "https://github.com",
        demo: "https://example.com",
      },
    },
    {
      title: "Full-Stack E-Commerce Platform",
      description: "Scalable e-commerce solution with real-time inventory, payment processing, and advanced analytics. Handles 100k+ concurrent users.",
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=500&fit=crop",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      achievements: [
        "99.9% uptime",
        "Sub-100ms response time",
        "$2M+ transactions processed",
      ],
      links: {
        github: "https://github.com",
        demo: "https://example.com",
      },
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
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Showcase of my most impactful work across AI, security, and full-stack development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="overflow-hidden h-full bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-foreground/80 mb-6 leading-relaxed">{project.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Highlights</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="text-primary mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-border/50">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
