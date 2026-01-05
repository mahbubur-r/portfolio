"use client";



import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "@/data/projects";
import { iconMap } from "@/utils/iconMap";

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
                                        {/* {project.serverRepo !== "#" && (
                                            <a
                                                href={project.serverRepo}
                                                className="p-3 bg-gray-800 rounded-full text-white hover:bg-primary hover:text-gray-900 transition-colors"
                                                title="Server Code"
                                            >
                                                <FaGithub />
                                            </a>
                                        )} */}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-secondary-light text-justify dark:text-text-secondary-dark mb-6 flex-1 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mb-6">
                                        <Link href={`/projects/${project.id}`} className="w-full block text-center py-2 px-4 bg-primary text-gray-900 font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
                                            View Details
                                        </Link>
                                    </div>

                                    <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                                        <h4 className="text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-3 uppercase tracking-wider">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {project.techStack.map((tech, idx) => {
                                                const Icon = iconMap[tech.iconName];
                                                return (
                                                    <div key={idx} className={`text-xl ${tech.color}`} title={tech.iconName.replace(/^(Fa|Si)/, '')}>
                                                        {Icon && <Icon />}
                                                    </div>
                                                );
                                            })}
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
