"use client";

import Link from "next/link";
import { Sun, Moon, ArrowUp, Mail, Github, Twitter, Heart } from "lucide-react";
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

const navigation = {
  sections: [
    {
      name: "Product",
      items: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Documentation", href: "#docs" },
      ],
    },
    {
      name: "Resources",
      items: [
        { name: "Components", href: "#components" },
        { name: "Templates", href: "#templates" },
        { name: "Examples", href: "#examples" },
      ],
    },
    {
      name: "Community",
      items: [
        { name: "Discord", href: "#discord" },
        { name: "GitHub", href: "#github" },
        { name: "Blog", href: "#blog" },
      ],
    },
    {
      name: "Company",
      items: [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Privacy", href: "#privacy" },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform`;

export default function Footer() {
  return (
    <footer className="border-t px-2">
      <div className="relative mx-auto grid max-w-4xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <Link href="/">
          <span className="text-lg font-serif italic">TourPlanner</span>
        </Link>
        <p className="bg-transparent text-center text-xs leading-4 text-muted-foreground md:text-left">
          Welcome to TourPlanner, where tour planning meets data-driven insights.
          We're passionate about helping artists and promoters plan successful tours.
          Our mission is to provide the best cities, venues, and ticket ranges using
          fanbase and market insights, so every show is a success. Built with Next.js 15,
          React 19, and modern web technologies.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="border-b border-dotted"></div>
        <div className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {navigation.sections.map((section) => (
              <div key={section.name}>
                <h3 className="text-sm font-semibold mb-4">{section.name}</h3>
                <ul role="list" className="flex flex-col space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name} className="flow-root">
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-dotted"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Email"
            href="mailto:hello@starterkit.dev"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="GitHub"
            href="https://github.com/starterkit"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Twitter"
            href="https://twitter.com/starterkit"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
        <ThemeToggle />
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-4xl">
        <div className="flex flex-row items-center justify-center gap-1 text-muted-foreground">
          <span>© </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Heart className="text-red-500 mx-1 h-4 w-4 animate-pulse fill-current" />
          <span>by developers, for developers</span>
          <span>-</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">
            <Link aria-label="TourPlanner" className="font-serif italic" href="/">
              TourPlanner
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
