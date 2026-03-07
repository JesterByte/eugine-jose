"use client";

import { Eye, FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function ResumeCTA() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
      {/* Download Button - Primary Action */}
      <motion.div 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto"
      >
        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto rounded-2xl px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 transition-all gap-3 text-base font-bold"
        >
          <a
            href="/Eugine_Jose_Resume.pdf"
            download="Eugine_Jose_Resume.pdf"
          >
            <FileDown className="w-5 h-5" />
            Download CV
          </a>
        </Button>
      </motion.div>

      {/* Preview Button - Secondary Action */}
      <motion.div 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto"
      >
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full sm:w-auto rounded-2xl px-8 h-14 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/40 transition-all gap-3 text-base font-semibold text-muted-foreground hover:text-primary"
        >
          <a
            href="/Eugine_Jose_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Eye className="w-5 h-5" />
            Preview
          </a>
        </Button>
      </motion.div>
    </div>
  );
}