import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "error" | "success";
  content: string;
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome to my portfolio terminal! Type 'help' for available commands." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string> = {
    help: "Available commands: about, skills, projects, research, ai, cyber, contact, clear, exit",
    about: "AI Engineer • Cybersecurity Researcher • Full-Stack Developer. Passionate about building intelligent systems.",
    skills: "Languages: Python, JavaScript, TypeScript | AI/ML: LLMs, PyTorch, TensorFlow | Security: Penetration Testing, Cryptography",
    projects: "Featured Projects: AI Research Lab, Cybersecurity Toolkit, E-Commerce Platform. View more on the Projects section.",
    research: "Research Focus: Prompt Engineering, AI Safety, Cybersecurity. Published papers and articles available.",
    ai: "AI Research Lab: Exploring LLMs, Agents, RAG Systems, Vision Models, and Fine-tuning techniques.",
    cyber: "Cybersecurity Lab: Network Security, OWASP, CTFs, Threat Intelligence, and Responsible Security Research.",
    contact: "Email: hello@example.com | GitHub: github.com/yourname | LinkedIn: linkedin.com/in/yourname",
    clear: "CLEAR",
    exit: "EXIT",
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [...lines, { type: "input", content: `$ ${cmd}` }];

    if (trimmed === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    if (trimmed === "exit") {
      setIsOpen(false);
      setInput("");
      return;
    }

    if (trimmed in commands) {
      newLines.push({
        type: "success",
        content: commands[trimmed as keyof typeof commands],
      });
    } else if (trimmed === "") {
      // Do nothing for empty input
    } else {
      newLines.push({
        type: "error",
        content: `Command not found: ${cmd}. Type 'help' for available commands.`,
      });
    }

    setLines(newLines);
    setInput("");
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <>
      {/* Terminal Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Terminal"
      >
        <span className="text-xl">{">"}</span>
      </motion.button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] z-50"
          >
            <Card className="bg-background border-primary/50 overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-primary/10 border-b border-primary/20 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm font-mono text-foreground/70">portfolio-terminal</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-primary/20 rounded transition-colors"
                  aria-label="Close Terminal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Terminal Content */}
              <div
                ref={scrollRef}
                className="bg-background p-4 font-mono text-sm h-80 overflow-y-auto space-y-2"
              >
                {lines.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${
                      line.type === "input"
                        ? "text-primary"
                        : line.type === "error"
                          ? "text-red-500"
                          : line.type === "success"
                            ? "text-green-500"
                            : "text-foreground/70"
                    }`}
                  >
                    {line.content}
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="bg-primary/5 border-t border-primary/20 px-4 py-3 flex items-center gap-2">
                <span className="text-primary font-mono">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command..."
                  className="flex-1 bg-transparent text-foreground font-mono text-sm outline-none placeholder-foreground/40"
                  autoFocus
                />
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
