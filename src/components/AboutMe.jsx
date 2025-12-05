"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function AboutMe() {
    return (
        <section id="about" className="py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Profile Card (formerly RightSidebar) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/3 bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg border border-border-light dark:border-border-dark h-fit"
                    >
                        <div className="text-center mb-6">
                            <div className="relative inline-block mb-4">
                                <Image
                                    alt="Profile picture of Mahbubur Rahman"
                                    className="rounded-full object-cover mx-auto"
                                    src="/about.png"
                                    width={120}
                                    height={120}
                                />
                                <span className="absolute bottom-2 right-2 block h-4 w-4 rounded-full bg-green-500 border-2 border-card-light dark:border-card-dark"></span>
                            </div>
                            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                                Mahbubur Rahman
                            </h3>
                            <div className="text-sm text-primary font-medium h-6 mt-1">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Frontend Developer",
                                            "MERN Stack Developer",
                                            "React Developer",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                        </div>

                        <div className="space-y-3 text-sm mb-6">
                            <div className="flex justify-between items-center">
                                <span className="bg-primary/20 text-primary px-2 py-1 rounded">
                                    Residence:
                                </span>
                                <span className="text-text-light dark:text-text-dark">Frankfurt am Main, Germany</span>
                            </div>
                            {/* <div className="flex justify-between items-center">
                                <span className="bg-primary/20 text-primary px-2 py-1 rounded">
                                    City:
                                </span>
                                <span className="text-text-light dark:text-text-dark">
                                    Frankfurt am Main
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="bg-primary/20 text-primary px-2 py-1 rounded">
                                    Age:
                                </span>
                                <span className="text-text-light dark:text-text-dark">24</span>
                            </div> */}
                        </div>

                        <hr className="border-border-light dark:border-border-dark my-6" />

                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">
                                Languages
                            </h4>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>German</span>
                                        <span>B1</span>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-full h-1.5">
                                        <div
                                            className="bg-primary h-1.5 rounded-full"
                                            style={{ width: "70%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div >
                                    <div className="flex justify-between mb-1">
                                        <span>English</span>
                                        <span>B2</span>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-full h-1.5">
                                        <div
                                            className="bg-primary h-1.5 rounded-full"
                                            style={{ width: "90%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-border-light dark:border-border-dark my-6" />

                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">
                                Skills
                            </h4>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>React / Next.js</span>
                                        <span>70%</span>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-full h-1.5">
                                        <div
                                            className="bg-primary h-1.5 rounded-full"
                                            style={{ width: "70%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>JavaScript</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-full h-1.5">
                                        <div
                                            className="bg-primary h-1.5 rounded-full"
                                            style={{ width: "80%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="https://drive.google.com/file/d/1l2v5xwjIxUam3DjarXbOD-T4UgoiaNDR/view">
                            <button className="w-full mt-8 py-3 bg-primary text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-md flex items-center justify-center gap-2">
                                DOWNLOAD CV <span className="material-icons">download</span>
                            </button>
                        </a>
                    </motion.div>

                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/3"
                    >
                        <h2 className="text-4xl font-bold text-text-light dark:text-text-dark mb-6">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-6 leading-relaxed">
                            I am a passionate Front-end Developer with a strong foundation in
                            building responsive and user-friendly web applications. With expertise
                            in modern JavaScript frameworks like React and Next.js, I strive to
                            create seamless digital experiences that solve real-world problems.
                        </p>
                        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-8 leading-relaxed">
                            My journey in web development is driven by a curiosity to learn and
                            adapt to new technologies. Whether it's crafting pixel-perfect UIs
                            or optimizing performance, I am dedicated to delivering high-quality
                            code.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white dark:bg-card-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">
                                    1
                                </h3>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">
                                    Years Experience
                                </p>
                            </div>
                            <div className="bg-white dark:bg-card-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">
                                    10+
                                </h3>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">
                                    Projects Completed
                                </p>
                            </div>
                            <div className="bg-white dark:bg-card-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">
                                    30+
                                </h3>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">
                                    Small Projects
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-card-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold mb-4">What I Do</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <div>
                                        <h4 className="font-semibold">React Development</h4>
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Building interactive and responsive user interfaces.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <div>
                                        <h4 className="font-semibold">Next.js Development</h4>
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Building fast and secure websites.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <div>
                                        <h4 className="font-semibold">JavaScript Development</h4>
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Developing cross-platform apps.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <div>
                                        <h4 className="font-semibold">Full Stack Web App</h4>
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Building full-stack web applications.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
