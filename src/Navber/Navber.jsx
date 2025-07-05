import React, { useContext } from 'react';

import Download from '../Icons/Download';

import { ArrowDownToLine } from 'lucide-react';
import logo from '../../src/assets/Logo/Untitled_design__2_-removebg-preview.png'



function handleDownload() {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Authcontext } from '../Context/Provider';
const Navber = () => {
    const { handleScrollToSection, contact,
        projects, sectionRef } = useContext(Authcontext)



    return (

        <div className='fixed z-[600] w-full overflow-hidden text-white'>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-[var(--secondary-color)] w-full px-4">
                        {/* Mobile: Drawer button */}
                        <div className="flex-none sm:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>

                        {/* Center title for desktop, hidden on mobile */}
                        <div className="flex-1 hidden sm:flex items-center">
                            <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="flex-1 justify-end items-center flex gap-4">
                            {/* Desktop: Links and Button */}
                            <div className="hidden sm:flex gap-4 items-center">
                                <h1 onClick={() => handleScrollToSection(sectionRef)} className="cursor-pointer hover:text-yellow-400">About</h1>
                                <h1 onClick={() => handleScrollToSection(contact)} className="cursor-pointer hover:text-yellow-400">Contact</h1>
                                <h1 onClick={() => handleScrollToSection(projects)} className="cursor-pointer hover:text-yellow-400">Projects</h1>

                                <ShimmerButton className='p-1' shimmerColor={'#ffffff'}>
                                    <button
                                        onClick={handleDownload}
                                        className="bg-[var(--secondary-color)] flex items-center gap-1 text-sm px-4 py-1 rounded-sm text-[var(--text-color)] hover:opacity-90">
                                        Resume
                                        <ArrowDownToLine className="w-5 h-5" />
                                    </button>
                                </ShimmerButton>
                            </div>

                            {/* Mobile: Show logo */}
                            <div className="block sm:hidden font-bold text-lg">
                                <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Drawer Sidebar */}
                <div className="drawer-side sm:hidden ">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu  bg-gray-950 space-y-2 min-h-full w-[60%] p-4 ">
                        <li onClick={() => handleScrollToSection(sectionRef)}><a>About</a></li>
                        <li onClick={() => handleScrollToSection(contact)}><a>Contact</a></li>
                        <li onClick={() => handleScrollToSection(projects)}><a>Projects</a></li>

                        <li className=' w-[70%]'>
                            <ShimmerButton className='p-1 ' shimmerColor={'#ffffff'}>
                                <button
                                    onClick={handleDownload}
                                    className="bg-[var(--secondary-color)] flex items-center gap-1 text-sm  mx-2 my-1 px-5 py-2 rounded-sm text-[var(--text-color)] w-full hover:opacity-90">
                                    Resume
                                    <ArrowDownToLine className="w-5 h-5" />
                                </button>
                            </ShimmerButton>
                        </li>


                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navber;