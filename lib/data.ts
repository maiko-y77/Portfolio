import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sipsavvyImg from "@/public/sipsavvy.png";
import sommetredImg from "@/public/sommrtred.png";
import interviewscheduler from "@/public/Interviewscheduler.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Procurement Assistant(Trade Assistant)",
    location: "Tokyo, Japan",
    description:
      "With approximately three years of experience, I began my career in a food ingredient trading company, initially serving as an administrative assistant.",
    icon: React.createElement(LuGraduationCap),
    date: "2011 - 2014",
  },
  {
    title: "Sales Manager",
    location: "Tokyo, Japan",
    description:
      "Eight years in sales support and export admin, promoted to Inside Sales achieving 30+ negotiations monthly with a 30% success rate over the last two years.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2022",
  },
  {
    title: "Web Development || Student CICCC",
    location: "Vancouver, Canada",
    description:
      "I enrolled in a coding bootcamp at CICCC and learned full-stack web development",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SipSavvy",
    description:
      "I worked as a full-stack developer on this blogging platform project for 2 month. Users will have different levels of access (admin, writer or reader).",
    tags: ["TypeScript", "Next.js", "Next-Auth", "Sass", "Express.js", "MongoDB", "Prisma"],
    imageUrl: sipsavvyImg,
    webUrl:"https://youtu.be/qveN7_oiRmw"
  },
  {
    title: "SOMMET RED",
    description:
      "Embarked on a project built entirely from scratch, utilizing SCSS for the first time.",
    tags: ["HTML", "Sass"],
    imageUrl: sommetredImg,
    webUrl:"https://sommet-red.vercel.app/"
  },
  {
    title: "Interview Scheduler",
    description:
      "I worked as a full-stack developer on this startup project for 2 month. This blogging platform where users will have different levels of access (admin, writer or reader).",
    tags: ["React(API design only)", "Express.js", "PostgreSQL", "Prisma"],
    imageUrl: interviewscheduler,
    webUrl:"https://github.com/maiko-y77/Interview-Scheduler"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Sass"
] as const;