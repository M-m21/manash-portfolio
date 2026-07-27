import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      name: "Programming",
      skills: ["Python", "C++", "JavaScript", "Java", "HTML", "CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Web Development",
      skills: ["MERN Stack", "React", "Node.js", "Express", "Tailwind CSS", "JavaScript"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Cybersecurity",
      skills: ["Ethical Hacking", "Network Security", "Vulnerability Assessment", "Threat Analysis", "OWASP"],
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Data & Analytics",
      skills: ["Data Analysis", "Data Visualization", "SQL", "Data Mining", "Reporting", "Analytics Tools"],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Design & Multimedia",
      skills: ["Maya", "Blender", "Adobe Suite", "Web Design", "UI/UX", "2D/3D Animation"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "IoT & Embedded",
      skills: ["ESP32", "Arduino", "Embedded Systems", "IoT Development"],
      color: "from-indigo-500 to-blue-500",
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
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                onMouseEnter={() => setSelectedCategory(category.name)}
                onMouseLeave={() => setSelectedCategory(null)}
                className="cursor-pointer group"
              >
                <Card
                  className={`p-6 h-full bg-card border-border/50 hover:border-primary/50 transition-all duration-300 ${
                    selectedCategory === category.name ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {/* Category Header */}
                  <div className="mb-6">
                    <div
                      className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-semibold text-sm mb-2`}
                    >
                      {category.name}
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="px-3 py-1 rounded-full bg-background border border-border/50 text-sm text-foreground/80 group-hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Other Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Linux", "Windows", "Mac OS", "Networking", "Database Design", "System Architecture", "Technical Writing", "Mentoring"].map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="p-4 rounded-lg bg-card border border-border/50 text-center hover:border-primary/50 transition-colors"
                >
                  <p className="text-sm font-medium text-foreground/80">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
