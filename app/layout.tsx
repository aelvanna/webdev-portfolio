import localFont from 'next/font/local';
import { Press_Start_2P } from 'next/font/google';
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap',
});

import 'nes.css/css/nes.min.css';
import '@/app/lib/pixel-retroui-setup.js';

import './globals.css';

import NavBar from '@/app/ui/navbar';

const minecraftFont = localFont({
  src: [
    { path: './fonts/Minecraft.otf', weight: '400', style: 'normal' },
    { path: './fonts/Minecraft-Bold.otf', weight: '700', style: 'normal' },
  ],
});

export const metadata = {
  title: 'Web development portfolio',
  description: 'Uses next.js as the framework',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${minecraftFont.className} ${pressStart2P.variable}`}>
      <body className="flex min-w-full flex-col">
        <NavBar />
        {children}
        <footer className="flex flex-col items-center pb-5">
          <p className="title p-5 underline underline-offset-2">Contact Me</p>
          <section className="icon-list flex flex-row gap-5">
            <a href="mailto:lmarie.fernandez@gmail.com" title="Email me">
              <i className="nes-icon gmail is-medium"></i>
            </a>
            <a
              href="https://github.com/aelvanna"
              target="_blank"
              rel="noreferrer"
              title="Visit my Github"
            >
              <i className="nes-icon github is-medium"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/lizamfernandez/"
              target="_blank"
              rel="noreferrer"
              title="Visit my LinkedIn"
            >
              <i className="nes-icon linkedin is-medium"></i>
            </a>
          </section>
        </footer>
      </body>
    </html>
  );
}
