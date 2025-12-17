"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === "dark" ? "light" : "dark";
    const transition = document.startViewTransition?.(() => setTheme(newTheme));
    if (!transition) return setTheme("system");

    const x = event.clientX;
    const y = event.clientY;

    transition.ready.then(() => {
      const path = [
        `circle(0% at ${x}px ${y}px)`,
        `circle(150% at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: theme === "dark" ? path : [...path].reverse(),
        },
        {
          duration: 600,
          easing: "ease-in-out",
          fill: "forwards",
          pseudoElement:
            newTheme === "light"
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)",
        },
      );
    });
  };

  return (
    <Button variant="outline" size="icon-sm" onClick={handleClick}>
      <Sun className="size-4 scale-100 transition dark:scale-0" />
      <Moon className="absolute size-4 scale-0 transition dark:scale-100" />
    </Button>
  );
}
