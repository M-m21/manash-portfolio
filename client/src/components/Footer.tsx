import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
            <p className="text-foreground/70 text-sm">
              © {currentYear} Manash Mishra Designed & Developed by Manash Mishra . All rights reserved.
            </p>
          </div>

          {/* Center Section */}
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="#about" className="text-foreground/70 hover:text-foreground text-sm transition-colors">
              About
            </a>
            <a href="#projects" className="text-foreground/70 hover:text-foreground text-sm transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground text-sm transition-colors">
              Contact
            </a>
          </div>

          {/* Right Section */}
          <div className="text-foreground/70 text-sm">
            <p>Crafted with passion using modern web technologies</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
