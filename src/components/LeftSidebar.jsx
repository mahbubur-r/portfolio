"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LeftSidebar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        setMounted(true);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
                threshold: 0,
            }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navItems = [
        { id: "home", icon: "home", label: "Home" },
        { id: "about", icon: "person", label: "About Me" },
        { id: "projects", icon: "code", label: "My Projects" },
        { id: "tech-stack", icon: "workspaces", label: "Tech Stack" },
        { id: "work-history", icon: "work", label: "Experience" },
        { id: "education", icon: "school", label: "Education" },
        // { id: "blog", icon: "article", label: "Blog" },
        { id: "contact", icon: "chat_bubble", label: "Contact" },
    ];

    return (
        <aside className="w-20 bg-card-light dark:bg-card-dark flex flex-col items-center py-8 border-r border-border-light dark:border-border-dark sticky top-0 h-screen">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark mb-12 hover:bg-primary/20 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {mounted ? (
                    <span className="material-icons text-xl transform -rotate-45">
                        {theme === "dark" ? "wb_sunny" : "nights_stay"}
                    </span>
                ) : (
                    <span className="material-icons text-xl transform -rotate-45">
                        nights_stay
                    </span>
                )}
            </button>
            <nav className="flex flex-col items-center space-y-6">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        className="relative group"
                        href={`#${item.id}`}
                        onClick={() => setActiveSection(item.id)}
                    >
                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeSection === item.id
                                ? "bg-primary text-text-light dark:text-text-dark"
                                : "bg-card-light dark:bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/20"
                                }`}
                        >
                            <span className="material-icons">{item.icon}</span>
                        </div>
                        <span className="absolute left-full ml-4 px-3 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50">
                            {item.label}
                        </span>
                    </a>
                ))}
            </nav>
        </aside>
    );
}
