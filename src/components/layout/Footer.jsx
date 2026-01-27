"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="relative mt-40 border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-[#050505] overflow-hidden">
      {/* Huge Background Text */}
      <div className="absolute -bottom-2 left-3 right-0 pointer-events-none select-none overflow-hidden whitespace-nowrap opacity-[0.03] dark:opacity-[0.09]">
        <h2 className="text-[20vw] font-black leading-none">ADARSH</h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-20"
        >
          {/* Left Side: The "Hook" */}
          <div className="space-y-8">
            <motion.h3 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter dark:text-white">
              Let's build <br /> 
              <span className="text-blue-600 dark:text-cyan-400">something iconic.</span>
            </motion.h3>
            
            <motion.div variants={itemVariants}>
              <a 
                href="mailto:adarshtiwaridev01@gmail.com" 
                className="group inline-flex items-center gap-4 text-xl font-medium dark:text-zinc-300"
              >
                adarshtiwaridev01@gmail.com
                <span className="h-[2px] w-0 bg-blue-600 dark:bg-cyan-400 transition-all group-hover:w-12" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Links */}
          <div className="grid grid-cols-2 gap-10">
        <motion.div variants={itemVariants} className="space-y-6">
  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400">
    Socials
  </h4>

  <ul className="space-y-4">
    {[
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adarshtiwaridev",
      },
      {
        name: "GitHub",
        url: "https://github.com/adarshtiwaridev",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/adarshtiwaridev",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/its_adarsh_02794",
      },
    ].map((social) => (
      <li key={social.name}>
        <motion.a
          whileHover={{ x: 10 }}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          {social.name}
        </motion.a>
      </li>
    ))}
  </ul>
</motion.div>


            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400">Navigation</h4>
              <ul className="space-y-4">
                {["About", "Projects", "Experience", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Final Bottom Row */}
        <div className="mt-32 pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-zinc-500 font-mono">
            ©{new Date().getFullYear()} — BORN IN INDIA
          </p>
          
          <div className="flex items-center gap-2">
             <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-sm text-zinc-500 font-mono uppercase tracking-tighter">Available for freelance</span>
          </div>

          <p className="text-sm text-zinc-500 font-mono italic">
            "Design is thinking made visual"
          </p>
        </div>
      </div>
    </footer>
  );
}