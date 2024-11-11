import Image from "next/image";
import Link from "next/link";

import ProjectStageChip from "@/app/components/ProjectStageChip";
import { getProjectSlug, Project } from "@/app/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const projectSlug = getProjectSlug(project.title);
  const image = project.assets.find((asset) => asset.placement === "card");

  return (
    <Link href={projectSlug} className="flex h-full">
      <article
        className={`border p-2 bg-white w-full transition-all hover:cursor-pointer shadow-md hover:shadow-xl group`}
      >
        <div
          className={`flex justify-between bg-gradient-to-r from-white to-gray-50 relative h-full`}
        >
          <span className="absolute -top-10 -left-1 font-bold">
            {project.startDate.slice(0, 4)}
          </span>
          <div className="flex-1 pl-2 h-full flex flex-col">
            <div className="overflow-hidden relative h-52 sm:h-60 flex flex-col">
              <div className="z-10 flex justify-between items-center pr-2">
                <h2 className="font-bold my-2">{project.title}</h2>
                <ProjectStageChip stage={project.stage} />
              </div>
              {image && (
                <Image
                  className="project-card-image object-cover w-full h-full md:opacity-85 transition-all duration-500 sm:group-hover:scale-105 sm:group-hover:opacity-100"
                  src={image.url}
                  alt={image.title}
                  width={500}
                  height={250}
                />
              )}
            </div>
            <p className="pt-4 pb-2 text-sm sm:text-base">
              {project.description}
            </p>
            <p className="py-2 text-xs sm:text-sm border-t border-dashed mt-auto">
              {project.technologies.map((tech, index) => (
                <span key={tech}>
                  {tech}
                  {index < project.technologies.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </div>
          <div className="w-8 h-auto relative border-l border-gray-300 group-hover:bg-black group-hover:text-white">
            <span className="w-24 rotate-90 origin-left text-nowrap flex translate-x-4 uppercase tracking-widest font-medium text-sm">
              view more
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}