"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
    setMounted(true);
  }, []);

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";

  if (!init || !mounted) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed top-0 left-0 -z-10"
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: { enable: true, force: 60, smooth: 10 },
            },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
            push: { quantity: 4 },
          },
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true },
          },
          color: {
            value: isDark ? "#22d3ee" : "#0ea5e9",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 4 },
          },
          links: {
            enable: true,
            distance: 180,
            color: isDark ? "#22d3ee" : "#0ea5e9",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: { min: 0.3, max: 1 },
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
