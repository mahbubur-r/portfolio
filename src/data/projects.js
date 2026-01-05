

export const projects = [
    {
        id: "swiftbook",
        title: "SwiftBook",
        description:
            "Role-based library management system that allows Admins, Librarians, and Users to manage books, users, and orders efficiently. The system manages books adding, updating, deleting, viewing and handles orders, allowing users to place and track their own orders while librarians and admins can view all orders and process for delivery after payment. Integrated JWT authentication for user login, authorization, and security and Integrated Stripe for secure payment processing. Developed backend APIs using Node.js & Express, including full CRUD operations. ",
        image: "/swiftbook.png",
        liveLink: "https://swiftbook.web.app/",
        clientRepo: "https://github.com/mahbubur-r/swiftbook-client",
        serverRepo: "https://github.com/mahbubur-r/swiftbook-server",
        challenges: [
            "Implementing secure role-based access control (RBAC) across frontend and backend.",
            "Handling complex state management for order tracking and user permissions.",
            "Integrating Stripe for seamless and secure payment processing."
        ],
        techStack: [
            { iconName: "FaReact", color: "text-cyan-400" },
            { iconName: "SiExpress", color: "text-gray-500 dark:text-gray-300" },
            { iconName: "FaNodeJs", color: "text-green-500" },
            { iconName: "SiJsonwebtokens", color: "text-purple-600" },
            { iconName: "SiFirebase", color: "text-orange-400" },
            { iconName: "SiTailwindcss", color: "text-cyan-500" },
            { iconName: "SiMongodb", color: "text-green-600" },
        ],
    },
    {
        id: "mentora-academy",
        title: "Mentora Academy",
        description:
            "Mentora Academy is a full-stack Online Learning Platform designed for both learners and instructors.Learners can browse courses, enroll and manage their learning. Instructors can create, update, and delete courses, and manage student enrollments. All course data, user enrolled, and instructor activities are stored in MongoDB, making the platform dynamic and scalable.",
        image: "/mentora.png",
        liveLink: "https://mentora-academy.netlify.app/",
        clientRepo: "https://github.com/mahbubur-r/mentora-academy-client",
        serverRepo: "https://github.com/mahbubur-r/mentora-academy-server",
        challenges: [
            "Designing a schema that efficiently handles relationships between users, courses, and enrollments.",
            "Building a dynamic dashboard for instructors to manage their content.",
            "Ensuring real-time updates for course availability and enrollment status."
        ],
        techStack: [
            { iconName: "FaReact", color: "text-cyan-400" },
            { iconName: "SiExpress", color: "text-gray-500 dark:text-gray-300" },
            { iconName: "FaNodeJs", color: "text-green-500" },
            { iconName: "SiFirebase", color: "text-orange-400" },
            { iconName: "SiTailwindcss", color: "text-cyan-500" },
            { iconName: "SiMongodb", color: "text-green-600" },
        ],
    },
    {
        id: "techmart",
        title: "TechMart",
        description:
            "An analytics dashboard for social media accounts, providing insights into engagement, follower growth, and content performance with interactive charts.",
        image: "/tech2mart.png",
        liveLink: "https://tech2mart.vercel.app/",
        clientRepo: "https://github.com/mahbubur-r/techmart-client",
        serverRepo: "https://github.com/mahbubur-r/techmart-server",
        challenges: [
            "Visualizing complex data sets in an intuitive method using charting libraries.",
            "Optimizing API calls to ensure dashboard performance remains fast with large datasets.",
            "Implementing authentication and securing user data."
        ],
        techStack: [
            { iconName: "SiNextdotjs", color: "text-black dark:text-white" },
            { iconName: "FaReact", color: "text-cyan-400" },
            { iconName: "SiExpress", color: "text-gray-500 dark:text-gray-300" },
            { iconName: "FaNodeJs", color: "text-green-500" },
            { iconName: "SiFirebase", color: "text-orange-400" },
            { iconName: "SiTailwindcss", color: "text-cyan-500" },
        ],
    },
    {
        id: "portfolio",
        title: "Portfolio Website",
        description:
            "A modern, responsive portfolio website showcasing skills, projects, and experience. Built with Next.js and Framer Motion for smooth animations.",
        image: "/portfolio.png",
        liveLink: "https://mahbubur.web.app/",
        clientRepo: "https://github.com/mahbubur-r/portfolio",
        serverRepo: "#",
        challenges: [
            "Creating a highly responsive design that looks great on all devices.",
            "Implementing smooth, complex animations without sacrificing performance.",
            "Organizing content effectively to highlight key achievements and skills."
        ],
        techStack: [
            { iconName: "SiNextdotjs", color: "text-black dark:text-white" },
            { iconName: "SiTailwindcss", color: "text-cyan-500" },
            { iconName: "FaReact", color: "text-cyan-400" },
            { iconName: "FaNodeJs", color: "text-green-500" },
            { iconName: "SiFirebase", color: "text-orange-400" },
        ],
    },
    {
        id: "gaming-infinity",
        title: "Gaming Infinity",
        description:
            "Gaming Infinity is a modern web application designed to showcase and distribute innovative gaming apps. Our platform provides users with a seamless, exciting, and immersive experience — turning bold ideas into unforgettable digital gaming journeys.",
        image: "/gaming-infinity.png",
        liveLink: "https://gaming-infinity.netlify.app/",
        clientRepo: "https://github.com/mahbubur-r/gaming-infinity",
        serverRepo: "#",
        challenges: [
            "Creating an immersive UI that aligns with the gaming aesthetic.",
            "Ensuring cross-browser compatibility and smooth performance for media-rich content.",
            "Structuring the project for easy scalability as more games are added."
        ],
        techStack: [
            { iconName: "FaReact", color: "text-cyan-400" },
            { iconName: "SiFirebase", color: "text-orange-400" },
            { iconName: "SiTailwindcss", color: "text-cyan-500" },
            { iconName: "FaNodeJs", color: "text-green-500" },
        ],
    },
];
