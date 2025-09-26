import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function TouringengineTimeline() {
  const data = [
    {
      title: "Why Touringengine?",
      content: (
        <div>
          <div className="w-full max-w-6xl mx-auto">
            <Image
              src="/Touringengine-light.png"
              alt="Why Touringengine?"
              width={1200}
              height={900}
              className="w-full h-auto rounded-lg block dark:hidden"
              priority
            />
            <Image
              src="/Touringengine.png"
              alt="Why Touringengine?"
              width={1200}
              height={900}
              className="w-full h-auto rounded-lg hidden dark:block"
              priority
            />
          </div>
        </div>
      ),
    },
    {
      title: "For Artists",
      content: (
        <div>
          <div className="w-full max-w-6xl mx-auto">
            <Image
              src="/artist-dark.png"
              alt="For Artists"
              width={1200}
              height={900}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      ),
    },
    {
      title: "For Promoters",
      content: (
        <div>
          <div className="w-full max-w-6xl mx-auto">
            <Image
              src="/promoters.png"
              alt="For Promoters"
              width={1200}
              height={900}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background">
      <Timeline data={data} />
    </div>
  );
}