'use client'
import React from "react";
import Link from "next/link";
import {Button} from "@mui/base";
import IconButton from "@mui/material/IconButton";
import useCustomMediaQuery from "@/app/hooks/useCustomMediaQuery";
import Menu from "@mui/icons-material/Menu";

const Navbar = () => {
    const { isDesktop } = useCustomMediaQuery();
    const [isShowMenu, setShowMenu] = React.useState<boolean>(false);

    const handleMenuButtonClick = () => {
        setShowMenu(!isShowMenu)
    };

    return isDesktop ? (
        <div className="w-full h-16 bg-[#fec809] sticky top-0">
            <div className="container px-36 h-full">
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
        ) : (
        <>
            <div className="flex justify-end items-center w-full h-16 bg-[#fec809] sticky top-0 right-0 pr-2">
                <IconButton
                    onClick={handleMenuButtonClick}
                >
                    <Menu />
                </IconButton>
            </div>
            {
                isShowMenu && <div className="flex flex-col justify-between items-center h-auto absolute bg-white p-4 drop-shadow-lg rounded-lg right-0 z-50">
                    <ul className="md:flex gap-2 text-white">
                        <li>
                            <Link href="/" onClick={()=>setShowMenu(false)}>
                                <p className="text-black">ค้นหารายชื่อ</p>
                            </Link>
                        </li>
                        <li className="pt-4">
                            <Link href="/faq" onClick={()=>setShowMenu(false)}>
                                <p className="text-black">คำถามที่พบบ่อย</p>
                            </Link>
                        </li>
                        <li className="pt-4">
                            <Link href="/contact" onClick={()=>setShowMenu(false)}>
                                <p className="text-black">เกี่ยวกับเรา</p>
                            </Link>
                        </li>
                    </ul>
                    <Button/>
                </div>
            }
        </>
    );
};

export default Navbar;