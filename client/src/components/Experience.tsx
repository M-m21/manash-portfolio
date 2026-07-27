import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      role: "Intern - Cyber Security",
      company: "Acmegrade, Gurugram, Haryana",
      period: "2023 - 2024",
      description: "Completed Cyber Security Internship with hands-on experience in security principles and threat analysis",
      achievements: [
        "Gained hands-on experience in cybersecurity principles and ethical hacking methodologies",
        "Performed vulnerability assessment and network security analysis",
        "Developed strong analytical and problem-solving skills in cyber threats",
      ],
      technologies: ["Ethical Hacking", "Network Security", "Vulnerability Assessment", "Threat Analysis"],
    },
    {
      role: "Intern - Data Analyst",
      company: "Hack-Tech Media Enterprise, Gurugram, Haryana",
      period: "2022 - 2023",
      description: "Completed Data Analyst Internship with hands-on experience in data analysis and visualization",
      achievements: [
        "Performed data analysis and visualization using analytical tools",
        "Developed skills in transforming raw data into actionable insights",
        "Created reports supporting business decision-making",
      ],
      technologies: ["Data Analysis", "Data Visualization", "SQL", "Reporting", "Analytics Tools"],
    },
    {
      role: "Web Developer & Technical Consultant",
      company: "Mishra Auto Parts, Mumbai, Maharashtra",
      period: "2021 - 2022",
      description: "Designed, developed, and maintained complete business website for Mishra Auto Parts",
      achievements: [
        "Designed and developed complete business website improving online presence",
        "Created promotional materials and managed digital content",
        "Provided ongoing technical support and design services",
      ],
      technologies: ["MERN Stack", "React", "Node.js", "Tailwind CSS", "Web Design"],
    },
    {
      role: "Technical & Design Consultant",
      company: "Vidhyarthi Vision Institute, Indore, Madhya Pradesh",
      period: "2020 - 2021",
      description: "Provided comprehensive technical and creative support for Vidhyarthi Vision Tuition Classes",
      achievements: [
        "Designed marketing materials including pamphlets, posters, and promotional content",
        "Implemented technology-driven solutions for educational content management",
        "Enhanced institute's professional presence through effective design and technical expertise",
      ],
      technologies: ["Web Design", "Adobe Suite", "Content Management", "Technical Support"],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Hands-on experience across various roles and industries
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div key={exp.company} variants={itemVariants}>
                <Card className="p-8 bg-background border-border/50 hover:border-primary/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <Badge className="w-fit bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full">
                      {exp.period}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3 text-foreground/80">
                          <span className="text-primary mt-1">→</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-background/50">
                        {tech}
                      </Badge>
                    ))}
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
