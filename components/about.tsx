"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After a career spanning over a decade in{" "}
        <span className="font-medium">Sales</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp at{" "}
        <span className="font-medium">
          <a
            className="underline text-[#2C3562]"
            href="https://ciccc.ca/programs/web-development/"
            target="_blank"
          >
            CICCC
          </a>
        </span>
        👩‍🎓 and learned{" "}
        <span className="font-medium">full-stack web development</span>👩‍💻.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span>love</span> the feeling of finally
        figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Front-End,
        Back-End, or Full-Stack developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games👾, <br /> watching sports🏂, and playing volleyball🏐.
      </p>
    </motion.section>
  );
}
