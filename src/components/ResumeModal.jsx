"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload } from "react-icons/fa";

export default function ResumeModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-white dark:bg-gray-900 w-full md:w-4/5 lg:w-3/5 h-[85vh] rounded-xl overflow-hidden shadow-2xl flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span className="material-icons text-primary">description</span>
                            My Resume
                        </h2>
                        <div className="flex items-center gap-2">
                            <a
                                href="https://drive.google.com/uc?export=download&id=10THuNBo89PWMUysyLDzF5Q22yFoxSuy5"
                                className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
                                title="Download Resume"
                                download
                            >
                                <FaDownload size={20} />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/10THuNBo89PWMUysyLDzF5Q22yFoxSuy5/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
                                title="Open in New Tab"
                            >
                                <span className="material-icons">open_in_new</span>
                            </a>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gray-100 dark:bg-gray-800 relative">
                        <iframe
                            src="https://drive.google.com/file/d/10THuNBo89PWMUysyLDzF5Q22yFoxSuy5/preview"
                            className="w-full h-full border-none"
                            title="Resume Preview"
                            allow="autoplay"
                        ></iframe>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
