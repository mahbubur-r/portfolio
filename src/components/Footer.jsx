"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="bg-background-light dark:bg-background-dark py-10 border-t border-gray-300 dark:border-gray-700 mt-10">
            <div className="container mx-auto px-6 text-center">

                {/* Footer Title */}
                <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                    Thanks for Visiting
                </h3>

                {/* Footer Text */}
                <p className="mt-3 text-text-secondary-light dark:text-text-secondary-dark">
                    © {new Date().getFullYear()} Mahbubur Rahman. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center mt-5 gap-6 text-3xl">
                    {/* GitHub */}
                    <a
                        href="https://github.com/mahbubur-r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                    >
                        <FaGithub />
                    </a>
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/mahbubur-r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                    >
                        <FaLinkedin />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:mahbubur-r@outlook.com"
                        className="hover:text-blue-500 transition"
                    >
                        <MdEmail />
                    </a>
                </div>
            </div>
        </footer>
    );
}
