import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ระบบ e-Tax Invoice / e-Receipt",
  description:
    "ค้นหารายชื่อผู้ประกอบการที่ได้รับอนุมัติให้จัดทำ ส่งมอบ และเก็บรักษาใบกำกับภาษีอิเล็กทรอนิกส์ และใบรับอิเล็กทรอนิกส์",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <footer className="text-center mb-8">
        <div>
          <div>© 2023, Crafted with 💖 By HSpotlight</div>
          <div>
            Facebook:{" "}
            <a href="https://www.facebook.com/HSpotlight/" target="_blank">
              HSpotlight
            </a>
          </div>
          <div>
            Github:{" "}
            <a href="https://www.github.com/hspotlight/" target="_blank">
              HSpotlight
            </a>
          </div>
          <div>
            Support me by:{" "}
            <a href="https://www.buymeacoffee.com/hspotlight" target="_blank">
              Buy me a coffee
            </a>
          </div>
        </div>
      </footer>
    </html>
  );
}
