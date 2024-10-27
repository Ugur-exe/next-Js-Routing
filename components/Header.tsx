'use client'
import { MyRouter } from '@/router/Router';
import Link from 'next/link';
import React from 'react'
import { useEffect, useState } from "react";
function Header() {

    const [darkmode, setDarkmode] = useState(false);

    useEffect(() => {
        if (darkmode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }, [darkmode])
    return (
        <>
            <header className="bg-blue-900 p-4 shadow-2xl">
                <div className=" container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-semibold md:text-xl">
                        <label htmlFor="">Logo</label>
                    </div>

                    <div className="hidden md:block md:w-1/3 lg:w-1/2">
                        <input type="text " />
                    </div>

                    <div className="text-white text-lg font-semibold">
                        <label htmlFor="">Login  </label>
                    </div>
                </div>
            </header>
            <div className="flex items-center p-3 space-x-8 justify-center bg-blue-800">
                <Link href={MyRouter.mainPage} className="text-white hover:text-black">Anasayfa</Link>
                <Link href={MyRouter.aboutPage} className="text-white hover:text-black">About</Link>

                <Link href={MyRouter.blogPage} className="text-white hover:text-black">Blog</Link>
                <Link href={MyRouter.contactPage} className="text-white hover:text-black">Contact</Link>
            </div>
        </>
    )
}

export default Header