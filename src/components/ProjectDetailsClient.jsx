"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { iconMap } from "@/utils/iconMap";

export default function ProjectDetailsClient({ project }) {
    if (!project) return null;

    return (
        <section className="py-20 bg-background-light dark:bg-background-dark min-h-screen">
            <div className="container mx-auto px-4">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-semibold">
                    <FaArrowLeft /> Back to Projects
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-card-dark rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800"
                >
                    {/* Project Header & Image */}
                    <div className="relative w-full aspect-video">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                            <div className="p-8 w-full">
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* Description */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4 border-l-4 border-primary pl-4">
                                Project Overview
                            </h2>
                            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed text-justify">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4 border-l-4 border-primary pl-4">
                                Technology Stack
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {project.techStack.map((tech, idx) => {
                                    const Icon = iconMap[tech.iconName];
                                    return (
                                        <div key={idx} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-text-light dark:text-text-dark font-medium shadow-sm">
                                            <span className={`text-xl ${tech.color}`}>
                                                {Icon && <Icon />}
                                            </span>
                                            <span>{tech.iconName.replace(/^(Fa|Si)/, '')}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Challenges */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4 border-l-4 border-primary pl-4">
                                Challenges Faced
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-text-secondary-light dark:text-text-secondary-dark text-lg">
                                {project.challenges && project.challenges.map((challenge, index) => (
                                    <li key={index} className="leading-relaxed">{challenge}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-gray-900 font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                            <a
                                href={project.clientRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all shadow-md hover:shadow-lg"
                            >
                                <FaGithub /> Client Repo
                            </a>
                            {/* {project.serverRepo !== "#" && (
                                <a
                                    href={project.serverRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all shadow-md hover:shadow-lg"
                                >
                                    <FaGithub /> Server Repo
                                </a>
                            )} */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
