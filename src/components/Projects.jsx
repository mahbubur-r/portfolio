"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiRedux } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
    {
        title: "Mentora Academy",
        description:
            "Mentora Academy is a full-stack online learning platform designed for both learners and instructors.Learners can browse courses, enroll and manage their learning.Instructors can create, update, and delete courses, and manage student enrollments. All course data, user enrolled, and instructor activities are stored in MongoDB, making the platform dynamic and scalable.",
        image: "./mentora.png",
        liveLink: "https://mentora-academy.netlify.app/",
        clientRepo: "https://github.com/mahbubur-r/mentora-academy-client",
        serverRepo: "https://github.com/mahbubur-r/mentora-academy-server",
        techStack: [
            { icon: FaReact, color: "text-cyan-400" },
            { icon: SiExpress, color: "text-gray-500 dark:text-gray-300" },
            { icon: FaNodeJs, color: "text-green-500" },
            { icon: SiFirebase, color: "text-orange-400" },
            { icon: SiTailwindcss, color: "text-cyan-500" },
            { icon: SiMongodb, color: "text-green-600" },
        ],
    },
    {
        title: "TechMart",
        description:
            "An analytics dashboard for social media accounts, providing insights into engagement, follower growth, and content performance with interactive charts.",
        image: "./tech2mart.png",
        liveLink: "https://tech2mart.vercel.app/",
        clientRepo: "https://github.com/mahbubur-r/techmart-client",
        serverRepo: "https://github.com/mahbubur-r/techmart-server",
        techStack: [
            { icon: SiNextdotjs, color: "text-black dark:text-white" },
            { icon: FaReact, color: "text-cyan-400" },
            { icon: SiExpress, color: "text-gray-500 dark:text-gray-300" },
            { icon: FaNodeJs, color: "text-green-500" },
            { icon: SiFirebase, color: "text-orange-400" },
            { icon: SiTailwindcss, color: "text-cyan-500" },
        ],
    }
    ,
    {
        title: "Portfolio Website",
        description:
            "A modern, responsive portfolio website showcasing skills, projects, and experience. Built with Next.js and Framer Motion for smooth animations.",
        image: "./portfolio.png",
        liveLink: "https://mahbubur.web.app/",
        clientRepo: "https://github.com/mahbubur-r/portfolio",
        // serverRepo: "#",
        techStack: [
            { icon: SiNextdotjs, color: "text-black dark:text-white" },
            { icon: SiTailwindcss, color: "text-cyan-500" },
            { icon: FaReact, color: "text-cyan-400" },
            { icon: FaNodeJs, color: "text-green-500" },
            { icon: SiFirebase, color: "text-orange-400" },
        ],
    },
    {
        title: "Gaming Infinity",
        description:
            "Gaming Infinity is a modern web application designed to showcase and distribute innovative gaming apps. Our platform provides users with a seamless, exciting, and immersive experience — turning bold ideas into unforgettable digital gaming journeys.",
        image: "./gaming-infinity.png",
        liveLink: "https://gaming-infinity.netlify.app/",
        clientRepo: "https://github.com/mahbubur-r/gaming-infinity",
        // serverRepo: "https://github.com/mahbubur-r/gaming-infinity",
        techStack: [
            { icon: FaReact, color: "text-cyan-400" },
            { icon: SiFirebase, color: "text-orange-400" },
            { icon: SiTailwindcss, color: "text-cyan-500" },
            // { icon: SiRedux, color: "text-purple-600" },
            { icon: FaNodeJs, color: "text-green-500" },
        ],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-6">
                        My <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                        Here are some of the projects I&apos;ve worked on. Each project reflects my passion for building robust and user-centric applications.
                    </p>
                </motion.div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-12"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-card-dark rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
                            >
                                <div className="relative h-56 w-full overflow-hidden group">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a
                                            href={project.liveLink}
                                            className="p-3 bg-primary rounded-full text-gray-900 hover:bg-white transition-colors"
                                            title="Live Demo"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                        <a
                                            href={project.clientRepo}
                                            className="p-3 bg-gray-800 rounded-full text-white hover:bg-primary hover:text-gray-900 transition-colors"
                                            title="Client Code"
                                        >
                                            <FaGithub />
                                        </a>
                                        {project.serverRepo !== "#" && (
                                            <a
                                                href={project.serverRepo}
                                                className="p-3 bg-gray-800 rounded-full text-white hover:bg-primary hover:text-gray-900 transition-colors"
                                                title="Server Code"
                                            >
                                                <FaGithub />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-secondary-light text-justify dark:text-text-secondary-dark mb-6 flex-1 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-4 mb-6">
                                        <a href={project.liveLink} className="text-primary hover:underline text-sm font-semibold">Live Demo</a>
                                        <a href={project.clientRepo} className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary text-sm font-semibold">Client Repo</a>
                                        {project.serverRepo !== "#" && (
                                            <a href={project.serverRepo} className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary text-sm font-semibold">Server Repo</a>
                                        )}
                                    </div>

                                    <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                                        <h4 className="text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-3 uppercase tracking-wider">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {project.techStack.map((tech, idx) => (
                                                <div key={idx} className={`text-xl ${tech.color}`} title={tech.icon.name}>
                                                    <tech.icon />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
