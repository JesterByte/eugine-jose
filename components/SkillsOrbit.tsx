"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const primarySkills = [
  { name: "PHP", icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg" },
  {
    name: "JavaScript",
    icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  },
  {
    name: "MySQL",
    icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  },
  {
    name: "React",
    icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },
  {
    name: "TypeScript",
    icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },
  {
    name: "Laravel",
    icon: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg",
  },
  {
    name: "Flutter",
    icon: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    name: "Git",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
];

export default function SkillsOrbit() {
  const [radius, setRadius] = useState(130);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 100 : 130);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMounted) return <div className="w-80 h-80 md:w-96 md:h-96" />;

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="relative z-20 w-20 h-20 md:w-24 md:h-24 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]"
      >
        <span className="text-xs md:text-sm font-bold tracking-tighter">
          EUGINE<span className="text-primary">.</span>
        </span>
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-10" />
      </motion.div>

      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {primarySkills.map((skill, index) => {
          const angle = (index / primarySkills.length) * (2 * Math.PI);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={skill.name}
              className="absolute"
              style={{ x, y }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                whileTap={{
                  scale: 1.2,
                  filter: "drop-shadow(0 0 8px rgba(6,182,212,0.6))",
                }}
                className="group relative flex flex-col items-center cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 p-2 md:p-2.5 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg group-hover:border-primary/50 transition-all duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all"
                  />
                </div>

                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity text-[10px] font-mono uppercase tracking-widest text-primary whitespace-nowrap bg-background/80 px-2 py-0.5 rounded border border-primary/20 pointer-events-none">
                  {skill.name}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="absolute w-50 md:w-65 h-50 md:h-65 rounded-full border border-primary/5 pointer-events-none" />
      <div className="absolute w-52.5 md:w-66.25 h-52.5 md:h-66.25 rounded-full border border-dashed border-primary/10 pointer-events-none" />
    </div>
  );
}
