import { Inter } from "next/font/google";
import "./globals.css"
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Al Quran Academy",
  description: "Al Quran Academy - Nurturing Faith & Knowledge | Enroll Now!Discover excellence in religious and secular education at Al Quran Academy. Join 400+ students on a journey of spiritual growth and academic achievement. Enroll today!",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">

      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  );
}
