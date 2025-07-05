import React, { useRef } from 'react';
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import emailjs from '@emailjs/browser';
const Contact = () => {



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SECRET_KEY,
            import.meta.env.VITE_TEMPLATE_KEY,
            form.current,
            import.meta.env.VITE_public_key
        ).then(
            () => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message.");
                console.error(error.text);
            }
        );
    };
    return (
        <div className="w-[95%] mx-auto my-10 space-y-8">



            {/* Main Content */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Left Text Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-4">
                    <h2 className="text-3xl font-bold text-white">
                        <span className="text-[var(--secondary-color)]">Get in </span>
                        <span className="text-white">Touch</span>
                    </h2>
                    <p className="text-white text-sm sm:text-base">
                        If you have any questions or want to work together, feel free to send me a message.
                        I'll try to get back to you as soon as possible.
                    </p>
                </div>

                {/* Right Form Section */}
                <div className="md:w-1/2 w-full bg-black border border-orange-500 rounded-lg p-6 relative">
                    <form onSubmit={sendEmail}  ref={form} action="" className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-white text-sm mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="Your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-white text-sm mb-1">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                name="message"
                                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="Your message"
                            ></textarea>
                        </div>


                        <ShimmerButton>

                            <button
                                type="submit"
                                className="bg-[var(--secondary-color)] text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </ShimmerButton>

                        <BorderBeam></BorderBeam>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Contact;
