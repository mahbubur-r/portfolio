"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Blog() {
    return (
        <section
            id="blog"
            className="bg-background-light dark:bg-background-dark font-display"
        >
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100">
                        Blog
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
                        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet
                        Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
                    </p>
                </motion.div>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Blog Post 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                    >
                        <Image
                            alt="Illustration of a website analytics dashboard on a laptop screen with purple background."
                            className="w-full h-56 object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDge4vMm03zP8yG6ZF_ve_iUIOlSxOG8wQ5Txj9f9FpcShuWcXF6BGYHqT9xMD70j7CqHTvlieAyQOKO6VNuV2qUMk17ntJDEvxK0MJ6RBLAKYaq0Y0ut4SU6NglIAXaLiVA12fDBeYqIOnI6MBnfOv_XTgRgAbiiG8EiE3EEtCPhuWR6b1fa14v1K0R2j5-c7IeGmYq25Wst7IqFUQdc64FdbQ6WGc0ZMqI_hLsv9kyKPFL58cdt8f6F1Zc6tfqNY0HimgxuZ1Les"
                            width={400}
                            height={224}
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                How To Make Web Tempates
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae
                                Nulla Diam In Ac Dictum A Urna
                            </p>
                            <a
                                className="mt-4 inline-block text-primary font-bold hover:underline"
                                href="#"
                            >
                                Learn More ›
                            </a>
                        </div>
                    </motion.div>

                    {/* Blog Post 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                    >
                        <Image
                            alt="Mockup of two modern business cards with red accents."
                            className="w-full h-56 object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuClmp5ZHeR_iB1adfjn3eMXcKF77r4GHZSt7du2W0amIGE5NSFv-S-Uk17xsxqLGhJXCEEzzdsOfhssECZJeGBwT80c8yQS6XdZk-wfLtHQahXAhJlR4ytZ6lOw4hQvzuDMmDSqGkaQxMLwfta8NGXntGfWL7SRAlOlOGRcWaYIKflRN4K_xEG0ubr03KAwNvusu-4Bw7Y2J4lP-cdhUeuKi4KSHV9Wng8CdS8Yw_KYMkRcs5StZzLs7S41qtjoYJmWYKhHRU_eHCA"
                            width={400}
                            height={224}
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                Make Business Card
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae
                                Nulla Diam In Ac Dictum A Urna
                            </p>
                            <a
                                className="mt-4 inline-block text-primary font-bold hover:underline"
                                href="#"
                            >
                                Learn More ›
                            </a>
                        </div>
                    </motion.div>

                    {/* Blog Post 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                    >
                        <Image
                            alt="Mockup of a black and a white letterhead with shadows cast upon them."
                            className="w-full h-56 object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkGPiPUJqgIvN34cXJfrZG_N7P3J1ju-yVi71SdoJfL0PjAP76VtWxZjc5-RCpbmJc19fkkhdneUpymiyexouTLdIXnW99kP8ZajSCdE8RgEUiAZ7txJHu2Yeg53vrLlw_rviDS--eYPJRcmOftYxdVsexp3z9hIZ_fDviCrEItiwV1FJQ6G8Cga48rBMkHeKa8Hx71CvZbl1Pl4fwSG1thzp7weWE_z2sezepXEYqAL4pVpL_ue0fEl7iv8zXkjANuVXDtHgRJA8"
                            width={400}
                            height={224}
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                How To Make Flyer Design
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae
                                Nulla Diam In Ac Dictum A Urna
                            </p>
                            <a
                                className="mt-4 inline-block text-primary font-bold hover:underline"
                                href="#"
                            >
                                Learn More ›
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
