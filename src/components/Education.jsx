"use client";

import { motion } from "framer-motion";

export default function Education() {
    const educationData = [
        {
            year: "2023 - Present",
            title: "Frankfurt University of Applied Sciences",
            subtitle: "Master of Engineering in Information Technology",
            description: "Completed a comprehensive degree focusing on Computer Science fundamentals, software engineering, and web technologies.",
        },
        {
            year: "Jun 2025 - Dec 2025",
            title: "Completed Web Development Course",
            subtitle: "Programming Hero",
            description: "Completed Web Development Course from Programming Hero and learn JavaScript (Basic, DOM, ES6), React.js, Firebase, Node.js, Express.js, MongoDB, Basic Next.js, AI Project, API Integration, HTML5, CSS3, Tailwind CSS and be able to create beautiful websites.",
        },
        {
            year: "2015 - 2019",
            title: "Noakhali Science and Technology University",
            subtitle: "Bachelor of Science in Information and Communication Engineering",
            description: "Completed a comprehensive degree focusing on Computer Science fundamentals, software engineering, and web technologies.",
        },
        {
            year: "2012 - 2015",
            title: "Higher Secondary Certificate",
            subtitle: "Science",
            description: "Completed HSC Certificate in Science.",
        }
    ];

    return (
        <section
            id="education"
            className="py-20 bg-background-light dark:bg-background-dark font-display"
        >
            <div className="container mx-auto px-4">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-6">
                        My<span className="text-primary"> Education</span>
                    </h1>
                    <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                        My academic journey has been a foundation for my career, providing me with the theoretical knowledge and practical skills needed to excel in web development.
                    </p>
                </motion.header>

                <div className="max-w-6xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-8 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-background-dark z-10 mt-6 md:mt-0"></div>

                            {/* Content Spacer for Desktop */}
                            <div className="hidden md:block md:w-1/2"></div>

                            {/* Content Card */}
                            <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                                <div className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 relative">
                                    {/* Arrow for Desktop */}
                                    <div
                                        className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-card-dark border-t border-l border-gray-100 dark:border-gray-800 transform rotate-45 ${index % 2 === 0
                                            ? "-left-2 border-r-0 border-b-0"
                                            : "-right-2 border-l-0 border-t-0 rotate-[225deg]"
                                            }`}
                                    ></div>

                                    <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                                        {item.year}
                                    </span>
                                    <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-1">
                                        {item.title}
                                    </h2>
                                    <h3 className="text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-3">
                                        {item.subtitle}
                                    </h3>
                                    <p className="text-text-secondary-light text-justify dark:text-text-secondary-dark text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
