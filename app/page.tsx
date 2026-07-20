'use client';

import CardHeader from './ui/cardheader';
import CardBody from './ui/cardbody';

export default function Home() {
  const paragraphs = [
    'Welcome to my web development portfolio! This website showcases my recent projects and skills in web development.',
  ];

  return (
    <>
      <CardHeader title="Liza Fernandez" link="/" subtitle="Front-end Developer" />
      <CardBody title="" paragraphs={paragraphs} />
    </>
  );
}
