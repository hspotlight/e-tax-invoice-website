import type { Metadata } from "next";
import {Kanit} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";


const kanit = Kanit({ subsets: ['thai'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

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
      <html className="h-full" lang="en">
        <body className={kanit.className}>
          <header>
            <Navbar/>
          </header>
          <div className="m-10 font-Kanit">
            {children}
          </div>

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
            </div>
          </footer>
        </body>
      </html>
  );
}
