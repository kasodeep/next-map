import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'next-cloudinary/dist/cld-video-player.css'

const space = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${space.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
