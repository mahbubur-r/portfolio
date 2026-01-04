"use client";

import { motion } from "framer-motion";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaFigma,
    FaChrome,
    FaLock,
    FaMobileAlt,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTypescript,
    SiC,
    SiCplusplus,
    SiNextdotjs,
    SiTailwindcss,
    SiReactquery,
    SiAxios,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiJsonwebtokens,
    SiNetlify,
    SiVercel,
    SiPostman,
    SiRedhat,
    SiCisco,
} from "react-icons/si";
import { TbApi, TbDatabase } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const techCategories = [
    {
        title: "Programming Languages",
        skills: [
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
            // { name: "C", icon: SiC, color: "text-blue-500" },
            // { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "React.js", icon: FaReact, color: "text-cyan-400" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
            { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
            { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
            { name: "TanStack Query", icon: SiReactquery, color: "text-red-500" },
            { name: "Axios", icon: SiAxios, color: "text-purple-600" },
            { name: "Context API", icon: FaReact, color: "text-cyan-400" },
        ],
    },
    {
        title: "Backend & Database",
        skills: [
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "Express.js", icon: SiExpress, color: "text-gray-500 dark:text-gray-300" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
            { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
            { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-500" },
            { name: "RESTful APIs", icon: TbApi, color: "text-gray-600 dark:text-gray-400" },
        ],
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
            { name: "GitHub", icon: FaGithub, color: "text-black dark:text-white" },
            { name: "VS Code", icon: VscCode, color: "text-blue-500" },
            { name: "Figma", icon: FaFigma, color: "text-purple-500" },
            { name: "Netlify", icon: SiNetlify, color: "text-teal-500" },
            { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
            { name: "Postman", icon: SiPostman, color: "text-orange-500" },
            { name: "Chrome DevTools", icon: FaChrome, color: "text-yellow-500" },
        ],
    },
    {
        title: "System and Network",
        skills: [
            { name: "RHCSA", icon: SiRedhat, color: "text-red-600" },
            { name: "CCNA", icon: SiCisco, color: "text-blue-500" },
        ],
    },
    {
        title: "Other Skills",
        skills: [
            { name: "Auth & Authorization", icon: FaLock, color: "text-yellow-600" },
            { name: "Responsive Design", icon: FaMobileAlt, color: "text-blue-400" },
            { name: "State Management", icon: TbDatabase, color: "text-green-500" },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function TechStack() {
    return (
        <section id="tech-stack" className="py-10 bg-background-light dark:bg-background-dark overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
                        Tech <span className="text-primary">Stack</span>
                    </h2>
                    <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto">
                        A curated list of technologies I use to build performant and scalable web applications.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {techCategories.map((category, index) => (
                        <div key={index}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-xl font-bold text-primary mb-3 border-l-4 border-primary pl-3"
                            >
                                {category.title}
                            </motion.h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="bg-white dark:bg-card-dark p-3 rounded-lg shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-2 transition-all duration-300 group h-24 w-full"
                                    >
                                        <div className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                            <skill.icon />
                                        </div>
                                        <span className="font-medium text-gray-700 dark:text-gray-200 text-center text-xs leading-tight">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
