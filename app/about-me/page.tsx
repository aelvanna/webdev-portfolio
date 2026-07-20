"use client";

import CardHeader from "@/app/ui/cardheader";
import CardBody from "@/app/ui/cardbody";

export default function AboutMe() {
  const paragraphs = [
    "I'm a front-end developer passionate about clean code, responsive websites, user experience, and continuous learning.",
    "I am currently improving my skills in web development by exploring new technologies.",
    "My current focus is on the use of React and next.js to create websites and web applications.",
  ];

  return (
    <>
      <CardHeader title="About Me" link="/about-me" subtitle="" />
      <CardBody paragraphs={paragraphs} />
    </>
  );
}
