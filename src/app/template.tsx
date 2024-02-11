"use client";
import useThemesStore from "@/stores/Themes";
import { motion } from "framer-motion";
import { useEffect } from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const fetchThemes = useThemesStore((store) => store.fetchThemes);

  useEffect(() => {
    fetchThemes();
  }, []);

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  );
}
