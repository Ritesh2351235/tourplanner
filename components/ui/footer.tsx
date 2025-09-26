"use client";

import Link from "next/link";
import { Sun, Moon, ArrowUp } from "lucide-react";
import { useTheme } from "next-themes";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border border-dotted">
        <button
          onClick={() => setTheme("light")}
          className="bg-black mr-3 rounded-full p-2 text-white dark:bg-background dark:text-white"
        >
          <Sun className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">Light mode</span>
        </button>

        <button type="button" onClick={handleScrollTop}>
          <ArrowUp className="h-3 w-3" />
          <span className="sr-only">Scroll to top</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className="dark:bg-black ml-3 rounded-full p-2 text-black dark:text-white"
        >
          <Moon className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">Dark mode</span>
        </button>
      </div>
    </div>
  );
};



export default function Footer() {
  return (
    <footer className="border-t px-2">
      <div className="relative mx-auto grid max-w-4xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <Link href="/">
          <span className="text-lg font-serif italic">Touringengine</span>
        </Link>
        <p className="bg-transparent text-center text-xs leading-4 text-muted-foreground md:text-left">
          Welcome to Touringengine, where live touring meets real-time intelligence.
          We&apos;re passionate about helping artists and promoters transform their data into
          actionable insights. Our mission is to unlock new audiences, grow global markets,
          and discover limitless possibilities for live music.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-6">
        <div className="border-b border-dotted"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6 py-6">
        <ThemeToggle />
      </div>

      <div className="mx-auto mb-10 mt-4 flex flex-col justify-between text-center text-xs md:max-w-4xl">
        <div className="flex flex-row items-center justify-center gap-1 text-muted-foreground">
          <span>© </span>
          <span>{new Date().getFullYear()}</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">
            <Link aria-label="Touringengine" className="font-serif italic" href="/">
              Touringengine
            </Link>
          </span>
          <span>- All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
