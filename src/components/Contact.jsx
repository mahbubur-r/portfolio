"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:mahbubur-r@outlook.com?subject=${encodeURIComponent(
            subject || "New Contact Form Submission"
        )}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        window.location.href = mailtoLink;
    };

    return (
        <section
            id="contact"
            className="font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-center text-text-light dark:text-text-dark mb-6">
                Get in<span className="text-primary"> Touch</span>
            </h1>
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-8">Contact Form</h2>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        htmlFor="fullName"
                                    >
                                        Your Full Name (Required)
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary outline-none transition-shadow"
                                        id="fullName"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        htmlFor="email"
                                    >
                                        Your Email (Required)
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary outline-none transition-shadow"
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        htmlFor="subject"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary outline-none transition-shadow"
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        htmlFor="message"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary outline-none transition-shadow h-32 resize-none"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    className="btn w-full mt-8 py-3 text-xl bg-primary text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 items-center gap-2 shadow-md flex  justify-center"
                                    type="submit"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary p-3 rounded-full text-gray-900 shadow-md">
                                    <FaMapMarkerAlt className="text-2xl" />
                                </div>
                                <div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Address:</h3>
                                        <p className="text-gray-600 dark:text-gray-400">Adam Opel Straße 24</p>
                                        <p className="text-gray-600 dark:text-gray-400">Frankfurt am Main, Germany</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <div className="flex items-start gap-4">
                                <div className="bg-primary p-3 rounded-full text-gray-900 shadow-md">
                                    <FaEnvelope className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Email:</h3>
                                    <a
                                        href="mailto:mahbubur-r@outlook.com"
                                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-lg"
                                    >
                                        mahbubur-r@outlook.com
                                    </a>
                                </div>
                            </div>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <div className="flex items-start gap-4">
                                <div className="bg-primary p-3 rounded-full text-gray-900 shadow-md">
                                    <FaPhoneAlt className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Mobile:</h3>
                                    <a
                                        href="tel:+4915753362954"
                                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-lg"
                                    >
                                        +49 15753362954
                                    </a>
                                </div>
                            </div>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <div className="flex items-start gap-4">
                                <div className="bg-primary p-3 rounded-full text-gray-900 shadow-md">
                                    <FaLinkedin className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">LinkedIn:</h3>
                                    <a
                                        href="https://linkedin.com/in/mahbubur-r"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-lg"
                                    >
                                        /in/mahbubur-r
                                    </a>
                                </div>
                            </div>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <div className="flex items-start gap-4">
                                <div className="bg-primary p-3 rounded-full text-gray-900 shadow-md">
                                    <FaGithub className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">GitHub:</h3>
                                    <a
                                        href="https://github.com/mahbubur-r"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-lg"
                                    >
                                        @mahbubur-r
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
