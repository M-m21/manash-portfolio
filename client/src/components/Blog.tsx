import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "Getting Started with LLM Fine-tuning",
      category: "AI",
      date: "2024-01-15",
      excerpt: "A comprehensive guide to fine-tuning large language models for specific tasks and domains.",
      readTime: "8 min",
      tags: ["LLMs", "AI", "Tutorial"],
    },
    {
      title: "Web Security Best Practices in 2024",
      category: "Security",
      date: "2024-01-10",
      excerpt: "Essential security practices every web developer should know to protect their applications.",
      readTime: "12 min",
      tags: ["Security", "Web Dev", "OWASP"],
    },
    {
      title: "Building Scalable Node.js Applications",
      category: "Backend",
      date: "2024-01-05",
      excerpt: "Patterns and practices for building backend systems that scale to millions of users.",
      readTime: "10 min",
      tags: ["Node.js", "Backend", "Architecture"],
    },
    {
      title: "Cybersecurity Career Path: From Beginner to Expert",
      category: "Career",
      date: "2023-12-28",
      excerpt: "A roadmap for building a successful career in cybersecurity with practical steps.",
      readTime: "15 min",
      tags: ["Career", "Security", "Learning"],
    },
    {
      title: "Deep Dive: Understanding RAG Systems",
      category: "AI",
      date: "2023-12-20",
      excerpt: "How Retrieval-Augmented Generation works and why it's transforming AI applications.",
      readTime: "14 min",
      tags: ["RAG", "AI", "Technical"],
    },
    {
      title: "Linux System Administration Essentials",
      category: "Linux",
      date: "2023-12-15",
      excerpt: "Core concepts and commands every system administrator needs to master.",
      readTime: "11 min",
      tags: ["Linux", "DevOps", "Tutorial"],
    },
  ];

  const categories = ["All", "AI", "Security", "Backend", "Career", "Linux", "Programming"];

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
    <section id="blog" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Articles</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Technical insights, career advice, and deep dives into technology
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:border-primary/50 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div key={post.title} variants={itemVariants}>
                <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col group cursor-pointer">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-foreground/60">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-foreground/80 mb-6 flex-grow">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50 text-secondary-foreground border-0 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group-hover:gap-3"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
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
