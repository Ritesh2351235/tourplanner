"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { User } from "lucide-react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "Touringengine transformed our tour planning process. The venue insights and market data saved us weeks of research time.",
    name: "Sarah Chen",
    role: "Frontend Developer",
  },
  {
    text: "The shadcn/ui components are perfectly integrated. Our team was productive from day one with the clean TypeScript setup.",
    name: "Marcus Johnson",
    role: "Tech Lead",
  },
  {
    text: "Amazing developer experience! The dark mode support and responsive design patterns made our app shine instantly.",
    name: "Elena Rodriguez",
    role: "UI/UX Designer",
  },
  {
    text: "Touringengine's data-driven approach helped us plan our tour 3x faster. The venue recommendations were exactly what we needed.",
    name: "David Kim",
    role: "Startup Founder",
  },
  {
    text: "The code quality and documentation are outstanding. Perfect for scaling our development team efficiently.",
    name: "Rachel Thompson",
    role: "Engineering Manager",
  },
  {
    text: "Best React starter I've used. The build optimization and deployment setup work flawlessly out of the box.",
    name: "Alex Park",
    role: "DevOps Engineer",
  },
  {
    text: "Our artist clients now have data-backed tour plans. Touringengine is a game-changer for booking agencies.",
    name: "Jessica Miller",
    role: "Agency Owner",
  },
  {
    text: "The TypeScript integration and component patterns helped our junior developers learn modern React quickly.",
    name: "Ryan Walsh",
    role: "Senior Developer",
  },
  {
    text: "Switching to Touringengine reduced our failed shows by 40%. The market insights made all the difference.",
    name: "Lisa Chang",
    role: "QA Lead",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background py-24 relative">
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">
            <span className="text-muted-foreground">See what our community has to say about</span>
            <br />
            <span className="font-serif italic">Touringengine</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
