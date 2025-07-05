import React from 'react';
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { File, Settings, Search } from "lucide-react";

const CircleIcon = () => {
    return (
        <div className="relative overflow-hidden h-[500px] w-full flex items-center justify-center flex-col text-white bg-gray-950">

            {/* Text on top */}
            <div className="z-20 text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Explore Features</h2>
                <p className="text-sm opacity-90">Hovering icons representing powerful tools</p>
            </div>

            {/* Orbiting Circles */}
            <div className="relative z-10 flex items-center justify-center">
                {/* Outer Circle Border for main Orbit */}
                <div className="absolute w-[240px] h-[240px] border-2 border-orange-500 rounded-full" />

                <OrbitingCircles
                    radius={120}
                    className="text-white"
                    iconClassName="hover:scale-125 transition-transform text-white"
                >
                    <File />
                    <Settings />
                    <Search />
                </OrbitingCircles>

                {/* Inner Circle Border for second orbit */}
                <div className="absolute w-[140px] h-[140px] border-2 border-orange-500 rounded-full" />

                <OrbitingCircles
                    radius={70}
                    reverse
                    className="text-white"
                    iconClassName="hover:scale-125 transition-transform text-white"
                >
                    <Search />
                    <Settings />
                    <File />
                </OrbitingCircles>
            </div>

            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
        </div>
    );
};

export default CircleIcon;
