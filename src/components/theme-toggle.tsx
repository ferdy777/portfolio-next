"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Get initial theme from localStorage
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | "system"
      | null;
    const initialTheme = storedTheme || "system";
    setTheme(initialTheme);

    const html = document.documentElement;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    let shouldBeDark = false;
    if (initialTheme === "dark") {
      shouldBeDark = true;
    } else if (initialTheme === "system") {
      shouldBeDark = prefersDark;
    }

    setIsDark(shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme: "light" | "dark" | "system" =
      theme === "system"
        ? isDark
          ? "light"
          : "dark"
        : theme === "light"
          ? "dark"
          : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    const html = document.documentElement;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    let shouldBeDark = false;
    if (newTheme === "dark") {
      shouldBeDark = true;
    } else if (newTheme === "light") {
      shouldBeDark = false;
    } else {
      // system
      shouldBeDark = prefersDark;
    }

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <button
        className="relative inline-flex items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="w-5 h-5 text-slate-600" />
      </button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 0.5 }}
        key={isDark ? "dark" : "light"}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-slate-400" />
        ) : (
          <Sun className="w-5 h-5 text-slate-600" />
        )}
      </motion.div>
    </motion.button>
  );
}
