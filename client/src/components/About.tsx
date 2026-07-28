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
    year: "2021",
    title: "Started B.Sc. in Information Technology",
    description: "Began my Bachelor of Science in Information Technology at Amity University Haryana.",
  },
  {
    year: "2024",
    title: "Completed B.Sc. Information Technology",
    description: "Graduated with a Bachelor's degree in Information Technology from Amity University Haryana.",
  },
  {
    year: "2024",
    title: "Started Master of Computer Applications (MCA)",
    description: "Pursued MCA with a focus on Full-Stack Development, Data Analytics, Artificial Intelligence, IoT, and Cybersecurity.",
  },
  {
    year: "2025",
    title: "Professional Experience & Research",
    description: "Completed Data Analyst and Cyber Security internships, worked on web development projects, and published a research paper on Java and modern software development.",
  },
  {
    year: "2026",
    title: "Completed MCA",
    description: "Graduated with a Master of Computer Applications from Amity University Haryana and started my professional software development journey.",
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
              MCA Graduate passionate about building modern software solutions using Full-Stack Development, Artificial Intelligence, IoT, Data Analytics, and Cybersecurity.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div variants={itemVariants} className="mb-16 max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-background border-border/50">
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                I'm an MCA graduate from Amity University Haryana with a strong passion for software engineering and emerging technologies. My journey started with curiosity about computers and gradually evolved into building web applications, AI-powered solutions, IoT projects, and cybersecurity skills.

                During my academic journey, I completed internships in Data Analytics and Cybersecurity, developed business websites, published a research paper, and worked on real-world software projects. I enjoy solving practical problems through technology and continuously learning new tools and frameworks.

                My goal is to contribute as a Software Developer by building reliable, scalable, and user-friendly applications while continuously improving my technical expertise.
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
