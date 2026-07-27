import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function About() {
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

  const timelineItems = [
    {
      year: "2020",
      title: "B.Sc. in Information Technology",
      description: "Completed bachelor's degree from Amity University Haryana",
    },
    {
      year: "2021",
      title: "Started Professional Journey",
      description: "Began internships in data analysis and cybersecurity",
    },
    {
      year: "2022",
      title: "Full-Stack Development",
      description: "Worked as Web Developer & Technical Consultant at Mishra Auto Parts",
    },
    {
      year: "2023",
      title: "Master's in Computer Applications",
      description: "Completed MCA from Amity University Haryana",
    },
    {
      year: "2024",
      title: "Current Focus",
      description: "Specializing in web development, data analytics, and cybersecurity",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Results-driven IT professional with expertise in software development, data analytics, and cybersecurity
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div variants={itemVariants} className="mb-16 max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-background border-border/50">
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                I'm an MCA graduate from Amity University Haryana with a strong foundation in software development, data analytics, and cybersecurity. My journey began with a curiosity about technology, which evolved into a commitment to mastering modern development practices and security principles.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                With hands-on experience through internships at leading companies like Vidhyarthi Vision Institute, Mishra Auto Parts, Hack-Tech Media, and Acmegrade, I've developed expertise in building scalable web applications, analyzing complex data, and implementing security best practices. I'm passionate about leveraging technology to solve real-world challenges.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm committed to continuous learning, staying updated with emerging technologies, and contributing to the tech community through innovative projects and technical solutions.
              </p>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-12 text-center">My Journey</h3>
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className="flex gap-6 md:gap-12"
                >
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    {index < timelineItems.length - 1 && (
                      <div className="w-0.5 h-24 bg-border mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <p className="text-sm font-semibold text-primary mb-1">{item.year}</p>
                    <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-bold mb-12 text-center">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Problem-Solving",
                  description: "Developing innovative technical solutions to real-world challenges",
                },
                {
                  title: "Quality & Excellence",
                  description: "Committed to delivering high-quality, production-ready solutions",
                },
                {
                  title: "Continuous Learning",
                  description: "Always exploring new technologies and expanding technical expertise",
                },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="p-6 rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
