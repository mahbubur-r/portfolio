"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function MobileNav() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-card-light dark:bg-card-dark border-t border-border-light dark:border-border-dark z-50 px-6 py-3 flex justify-between items-center shadow-lg">
            <a href="#home" className="flex flex-col items-center text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                <span className="material-icons">home</span>
                <span className="text-xs mt-1">Home</span>
            </a>
            <a href="#projects" className="flex flex-col items-center text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                <span className="material-icons">code</span>
                <span className="text-xs mt-1">Projects</span>
            </a>
            <a href="#tech-stack" className="flex flex-col items-center text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                <span className="material-icons">workspaces</span>
                <span className="text-xs mt-1">Tech Stack</span>
            </a>
            <a href="#education" className="flex flex-col items-center text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                <span className="material-icons">school</span>
                <span className="text-xs mt-1">Education</span>
            </a>
            <a href="#contact" className="flex flex-col items-center text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                <span className="material-icons">email</span>
                <span className="text-xs mt-1">Contact</span>
            </a>
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex flex-col items-center text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
            >
                {mounted ? (
                    <span className="material-icons">
                        {theme === "dark" ? "wb_sunny" : "nights_stay"}
                    </span>
                ) : (
                    <span className="material-icons">nights_stay</span>
                )}
                <span className="text-xs mt-1">Theme</span>
            </button>
        </div>
    );
}
