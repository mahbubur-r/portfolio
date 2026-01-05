"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="home" className="flex flex-col lg:flex-row items-center justify-between py-20 lg:py-32 px-8 lg:py-16 gap-12 lg:gap-0 relative overflow-hidden rounded-[3rem]">
            {/* Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl text-center lg:text-left order-2 lg:order-1 relative z-10"
            >
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                    Hello, I&apos;m
                </h3>
                <h1 className="text-5xl md:text-7xl font-bold text-text-light dark:text-text-dark mb-4 tracking-tight">
                    {/* Mahbubur <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Rahman</span> */}
                    Mahbubur <span className="text-primary">Rahman</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-text-secondary-light dark:text-text-secondary-dark h-16 flex items-center justify-center lg:justify-start">
                    {/* <span className="mr-3">A</span> */}
                    <span className="text-primary">
                        <Typewriter
                            options={{
                                strings: [
                                    "Frontend Developer",
                                    "MERN Stack Developer",
                                    "Next JS Developer",
                                    "React Developer",
                                    "Junior Full Stack Developer",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    </span>
                </h2>
                <p className="text-lg text-black-light dark:text-white-dark mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 text-justify">
                    I am an Ambitious Frontend Developer specializing in Javascript, React, Next.js, Node.js. Express, and  MongoDB, I create full-stack web applications that are fast, responsive, and user-friendly. My focus is on writing clean, maintainable code, implementing modern web technologies, and delivering projects that provide real value to users.
                </p>


                <div className="flex flex-col sm:flex-row items-center gap-6 text-justify justify-center lg:justify-start">
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        HIRE ME <span className="material-icons">arrow_forward</span>
                    </a>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-4 bg-teal-500 text-white font-bold rounded-full shadow-lg hover:bg-teal-600 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            RESUME <span className="material-icons">description</span>
                        </button>

                        <a
                            href="https://www.linkedin.com/in/mahbubur-r/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-[#0077b5] text-white rounded-full shadow-lg hover:bg-[#006396] hover:scale-110 transition-all duration-300"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/mahbubur-r"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 hover:scale-110 transition-all duration-300 border border-gray-700"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub size={22} />
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative order-1 lg:order-2"
            >
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                    {/* Decorative Circle Background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-pink-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>

                    {/* Image Container */}
                    <div className="relative w-full h-full rounded-full border-4 border-primary/20 p-2">
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background-light dark:border-background-dark shadow-2xl">
                            <Image
                                alt="Mahbubur Rahman"
                                className="object-cover"
                                src="/mahbubur.png"
                                fill
                                priority
                            />
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-4 -left-4 bg-white dark:bg-card-dark p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3"
                    >
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                            <span className="material-icons">code</span>
                        </div>
                        <div>
                            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium">Coder</p>
                            <p className="text-sm font-bold text-text-light dark:text-text-dark">Daily</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
