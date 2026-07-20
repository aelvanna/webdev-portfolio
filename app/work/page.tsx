"use client";

import CardHeader from "@/app/ui/cardheader";
import CardBody from "@/app/ui/cardbody";

export default function Work() {
  const paragraphs = [
    "This page is dedicated to showcasing my recent projects and work.",
  ];

  return (
    <>
      <CardHeader title="Work" link="/work" subtitle="" />
      <CardBody paragraphs={paragraphs} />
    </>
  );
}
