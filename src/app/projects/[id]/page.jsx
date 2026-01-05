
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailsClient from "@/components/ProjectDetailsClient";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetails({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailsClient project={project} />;
}
