import React from "react";
import Link from "next/link";
import {Button} from "@mui/base";

const Navbar = () => {
    return (
        <>
            <div className="w-full h-16 bg-[#fec809] sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <ul className="hidden md:flex gap-x-6 text-white">
                            <li>
                                <Link href="/">
                                    <p className="text-black">ค้นหารายชื่อ</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq">
                                    <p className="text-black">คำถามที่พบบ่อย</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <p className="text-black">เกี่ยวกับเรา</p>
                                </Link>
                            </li>
                        </ul>
                        <Button />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;