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
                            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark">
                                Mahbubur Rahman
                            </h3>
                            <p className="text-center text-sm mt-0 ">Frankfurt am Main, Germany</p>
                            <div className="text-sm text-primary font-bold h-6 mt-1">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Frontend Developer",
                                            "Junior Full Stack Developer",
                                            "MERN Stack Developer",
                                            "Next JS Developer",
                                            "React Developer",
                                            "Web Developer",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
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
                                        <span>C1</span>
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
                                Tech Skills
                            </h4>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Typescript</span>
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
                                        <span>JavaScript(ES6+)</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-full h-1.5">
                                        <div
                                            className="bg-primary h-1.5 rounded-full"
                                            style={{ width: "80%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>React</span>
                                        <span>75%</span>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-full h-1.5">
                                        <div
                                            className="bg-primary h-1.5 rounded-full"
                                            style={{ width: "75%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Next.js</span>
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
                                        <span>Node.js</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-full h-1.5">
                                        <div
                                            className="bg-primary h-1.5 rounded-full"
                                            style={{ width: "80%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Express.js</span>
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
                                        <span>MongoDB</span>
                                        <span>75%</span>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-full h-1.5">
                                        <div
                                            className="bg-primary h-1.5 rounded-full"
                                            style={{ width: "75%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Tailwind CSS</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-full h-1.5">
                                        <div
                                            className="bg-primary h-1.5 rounded-full"
                                            style={{ width: "95%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="https://drive.google.com/file/d/10THuNBo89PWMUysyLDzF5Q22yFoxSuy5/view?usp=sharing" className="btn w-full mt-8 py-3 text-xl bg-primary text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 items-center gap-2 shadow-md flex  justify-center">
                            RESUME <span className="material-icons">download</span>
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
                        <p className="text-lg text-black-light dark:text-white-dark mb-6 leading-relaxed">
                            I am a passionate Front-end Developer with a strong foundation in
                            building responsive and user-friendly web applications. With expertise
                            in modern JavaScript frameworks like React and Next.js, I strive to
                            create seamless digital experiences that solve real-world problems.
                        </p>
                        <p className="text-lg text-black-light dark:text-white-dark mb-8 leading-relaxed">
                            My journey in web development is driven by a curiosity to learn and
                            adapt to new technologies. Whether it is crafting pixel-perfect UIs
                            or optimizing performance, I am dedicated to delivering high-quality
                            code.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white dark:bg-card-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">
                                    6+
                                </h3>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">
                                    Months Web Bootcamp
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

                        {/* <div className="bg-white dark:bg-card-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
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
                                        <h4 className="font-semibold">Small Full Stack Web App</h4>
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Building full-stack web applications.</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* My Journey Section */}
                        <div className="bg-white dark:bg-card-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 mt-8">
                            <h3 className="text-xl font-bold mb-6">My Journey & Interests</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full h-fit">
                                        <span className="material-icons text-primary">code</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2">Programming Journey</h4>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed text-justify">
                                            My coding adventure started with a spark of curiosity for how the web works. That curiosity led me to an intensive 6-month web development bootcamp where I dove deep into the MERN stack. From building simple static pages to complex full-stack applications like <strong>SwiftBook</strong> and <strong>Mentora Academy</strong>, I&apos;ve fallen in love with the process of turning ideas into functional, interactive reality.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full h-fit">
                                        <span className="material-icons text-primary">terminal</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2">The Work I Enjoy</h4>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed text-justify">
                                            I thrive on building scalable, user-centric web applications. I love solving logic puzzles in the backend with <strong>Node.js</strong> as much as I enjoy crafting pixel-perfect, responsive interfaces with <strong>React</strong> and <strong>Tailwind CSS</strong>. Clean code, performance optimization, and creating seamless user experiences are what drive me every day.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full h-fit">
                                        <span className="material-icons text-primary">sports_esports</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2">Beyond the Screen</h4>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed text-justify">
                                            When I&apos;m not coding, you&apos;ll likely find me immersed in the world of <strong>Gaming</strong> (exploring immersive narratives or competitive strategy), which fuels my appreciation for interactive design. I&apos;m also an avid traveler, always eager to explore new cities and cultures, finding inspiration in the diversity of the world around me.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full h-fit">
                                        <span className="material-icons text-primary">psychology</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2">My Personality</h4>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed text-justify">
                                            I&apos;m a detail-oriented problem solver and a lifelong learner. I believe there&apos;s always something new to discover in technology. I&apos;m a collaborative team player who values open communication and believes that the best solutions come from working together. I approach every challenge with optimization and creativity in mind.
                                        </p>
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
