import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function LearningDashboard() {
  const learningItems = [
    {
      title: "Advanced LLM Fine-tuning",
      type: "Course",
      progress: 85,
      status: "In Progress",
    },
    {
      title: "Kubernetes for Developers",
      type: "Course",
      progress: 60,
      status: "In Progress",
    },
    {
      title: "Security Engineering",
      type: "Certification",
      progress: 45,
      status: "In Progress",
    },
    {
      title: "Building AI Agents",
      type: "Course",
      progress: 100,
      status: "Completed",
    },
  ];

  const books = [
    { title: "Designing Machine Learning Systems", author: "Chip Huyen", status: "Reading" },
    { title: "The Security Mindset", author: "Bruce Schneier", status: "Reading" },
    { title: "System Design Interview", author: "Alex Xu", status: "Completed" },
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
    <section id="learning" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Learning Dashboard</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Continuous learning and skill development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Courses & Certifications */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8">Courses & Certifications</h3>
              <div className="space-y-6">
                {learningItems.map((item) => (
                  <Card key={item.title} className="p-6 bg-background border-border/50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-foreground">{item.title}</h4>
                        <p className="text-sm text-foreground/60">{item.type}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        item.status === "Completed"
                          ? "bg-green-500/20 text-green-700"
                          : "bg-blue-500/20 text-blue-700"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/70">Progress</span>
                        <span className="font-semibold text-foreground">{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Books & Resources */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8">Books & Resources</h3>
              <div className="space-y-6">
                {books.map((book) => (
                  <Card key={book.title} className="p-6 bg-background border-border/50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-1">{book.title}</h4>
                        <p className="text-sm text-foreground/60 mb-3">{book.author}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded whitespace-nowrap ml-2 ${
                        book.status === "Completed"
                          ? "bg-green-500/20 text-green-700"
                          : "bg-yellow-500/20 text-yellow-700"
                      }`}>
                        {book.status}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Learning Stats */}
          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Major Projects", value: "3+" },
              { label: "Internships", value: "2" },
              { label: "Certifications", value: "10+" },
              { label: "Books Read", value: "15+" },
              { label: "Research Papers", value: "2+" },
              { label: "Learning Hours", value: "500+" },
            ].map((stat) => (
              <Card key={stat.label} className="p-6 bg-background border-border/50 text-center">
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-foreground/80">{stat.label}</p>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
