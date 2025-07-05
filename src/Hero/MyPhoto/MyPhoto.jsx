import React from 'react';
import { motion} from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
const MyPhoto = () => {
    return (
        <div>

            <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}


                className="relative inline-block overflow-hidden rounded-full text-white ">

                <BorderBeam
                    borderWidth={6}
                    size={300}
                    colorFrom={'#ff8c00'}
                    colorTo={'#e4e4e4'}
                    className="absolute inset-0 rounded-full"
                />

                <div className="relative z-10 sm:w-full h-full">
                    <img
                        className="w-full h-full object-cover rounded-full "
                        src="https://i.ibb.co/DgKvN4Cf/IMG-0297-removebg-preview.png"
                        alt="Profile"
                    />
                </div>
            </motion.div>


        </div>
    );
};

export default MyPhoto;
