"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ children }: any) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 600], [0, -120]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}
