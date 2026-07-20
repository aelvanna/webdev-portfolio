import localFont from "next/font/local";
const minecraftFont = localFont({
  src: [
    { path: "./fonts/Minecraft.otf", weight: "400", style: "normal" },
    { path: "./fonts/Minecraft-Bold.otf", weight: "700", style: "normal" },
  ],
});

import { Press_Start_2P } from "next/font/google";
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

import "@/app/lib/pixel-retroui-setup.js";
import "./globals.css";

import NavBar from "@/app/ui/navbar";
import { Bubble } from "pixel-retroui";

export const metadata = {
  title: "Web development portfolio",
  description: "Uses next.js as the framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${minecraftFont.className} ${pressStart2P.variable} h-full max-h-screen`}
    >
      <body className="flex flex-col min-w-full p-5">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
