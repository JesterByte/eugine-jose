"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingText() {
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current!, {
      strings: [
        "Junior Software Developer",
        "Laravel & Flutter Enthusiast",
        "Modernizing Legacy Systems",
        "Learning. Building. Improving.",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return <span ref={element} className="text-foreground"></span>;
}
