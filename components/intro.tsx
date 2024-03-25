"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="md-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/morezoomavatar.jpg"
              width="192"
              height="192"
              quality="95"
              priority={true}
              alt="Maiko portrait"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🙌
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Maiko.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span>.
        <br />I enjoy building <span className="italic">sites & apps</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 
      text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-[#33186B] text-white px-7 py-3 flex items-center gap-2 
          rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-[#C499F3] 
          active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Maiko_Yorino_Resume.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none focus:scale-110 hover:scale-110 
          active:scale-105 transition cursor-pointer borderBlack"
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/maiko-yorino-36a37b270/"
          target="_blank"
          className="bg-white p-4 text-[#0A66C2] flex items-center gap-2 rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] hover:text-[#04488c] active:scale-105 transition cursor-pointer borderBlack"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/maiko-y77"
          target="_blank"
          className="bg-white p-4 text-[#1F2328] flex items-center gap-2 text-[1.35rem] rounded-full
          focus:scale-[1.15] hover:scale-[1.15] hover:text-text-gray-950
          active:scale-105 transition cursor-pointer borderBlack"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
