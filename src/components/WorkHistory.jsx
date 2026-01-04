"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";

const experiences = [
    {
        id: 1,
        role: "Working Student",
        company: "Quantum Edge Informatics UG",
        period: "Dec 2024 - Present",
        type: "Part-time",
        description: "Werkstudent in Data Center Management, contributing to multiple projects while learning new technologies and collaborating with cross-functional teams to optimize data flows. Managed Linux-based server configuration, troubleshooting, and rescue operations, provided end-to-end data centre support for servers and network devices, and performed copper and fiber cabling installation, testing, labeling, and connectivity issue resolution.",
        icon: FaGraduationCap,
        tags: ["Linux Administration", "Data Center", "System Recovery"],
    },
    {
        id: 2,
        role: "Junior Support Engineer",
        company: "Earth Telecommunications Pvt. Ltd.",
        period: "Jan 2021 - Mar 2022",
        type: "Full-time",
        description: "Maintained and troubleshot IT and network infrastructure while monitoring systems to ensure high availability, security, and optimal performance. Implemented network security controls, resolved incidents through ticketing systems, and optimized system performance using proactive monitoring. Supported multi-vendor network devices by performing basic configuration and troubleshooting to ensure reliable connectivity.",
        icon: FaBriefcase,
        tags: ["Troubleshooting", "Network Infrastructure", "IT Operations" ],
    },
    // {
    //     id: 3,
    //     role: "Working Student",
    //     company: "National Model College",
    //     period: "Nov 2019 - Dec 2020",
    //     type: "Part-time",
    //     description: "Maintained and troubleshot the network infrastructure. Assisted faculty and students with technical support and system maintenance.",
    //     icon: FaCode,
    //     tags: ["Support", "Maintenance", "Networking"],
    // },
];

export default function WorkHistory() {
    return (
        <section
            id="work-history"
            className="py-24 bg-background-light dark:bg-background-dark font-display"
        >
            <div className="container mx-auto px-4">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-20 max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                        Career Path
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-6">
                        Work <span className="text-primary">Experiences</span>
                    </h1>
                    <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                        My professional journey has been driven by curiosity and a commitment to excellence.
                    </p>
                </motion.header>

                <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative md:pl-20"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-[23px] top-8 w-4 h-4 bg-primary rounded-full border-4 border-background-light dark:border-background-dark z-10 hidden md:block shadow-[0_0_0_4px_rgba(249,115,22,0.2)]"></div>

                                {/* Content Card */}
                                <div className="group bg-white dark:bg-card-dark rounded-2xl p-8 shadow-lg border-l-4 border-primary hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                                    {/* Background Decoration */}
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                                        <exp.icon className="text-9xl text-primary transform rotate-12 translate-x-4 -translate-y-4" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <h4 className="text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark">
                                                    {exp.company}
                                                </h4>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold whitespace-nowrap">
                                                    {exp.period}
                                                </span>
                                                <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium uppercase tracking-wide">
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6 text-base md:text-lg max-w-3xl">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-medium px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-800/50 text-text-secondary-light dark:text-text-secondary-dark border border-gray-200 dark:border-gray-700"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
