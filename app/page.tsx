import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Home() {
  return (
    <div className="fade-in pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
