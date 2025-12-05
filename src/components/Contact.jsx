"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-8">Leave Us Your Info</h2>
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
                                    className="w-full bg-primary text-gray-900 font-bold py-3 rounded-md hover:bg-yellow-400 transition-colors"
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
                                <div className="bg-primary p-3 rounded-full text-gray-900">
                                    <span className="material-icons">location_on</span>
                                </div>
                                <div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Country:</h3>
                                        <p className="text-gray-600 dark:text-gray-400">Germany</p>
                                        <h3 className="text-lg font-bold mt-4 mb-1">City:</h3>
                                        <p className="text-gray-600 dark:text-gray-400"> Frankfurt am Main</p>
                                        <h3 className="text-lg font-bold mt-4 mb-1">Street:</h3>
                                        <p className="text-gray-600 dark:text-gray-400"> Adam Opel Straße 24</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary p-3 rounded-full text-gray-900">
                                    <span className="material-icons">email</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Email:</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        mahbubur-r@outlook.com
                                    </p>
                                    <h3 className="text-lg font-bold mt-4 mb-1">LinkedIn:</h3>
                                    <p className="text-gray-600 dark:text-gray-400">@mahbubur-r</p>
                                    <h3 className="text-lg font-bold mt-4 mb-1">Github:</h3>
                                    <p className="text-gray-600 dark:text-gray-400">@mahbubur-r</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary p-3 rounded-full text-gray-900">
                                    <span className="material-icons">smartphone</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Mobile:</h3>
                                    <p className="text-gray-600 dark:text-gray-400">+49 15753362954</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
