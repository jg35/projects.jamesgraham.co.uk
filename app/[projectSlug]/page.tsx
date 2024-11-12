import { getProjectSlug, projects } from "@/app/data/projects";
import "swiper/css";
import Gallery from "@/app/components/Gallery";
import Link from "next/link";
import GithubIcon from "../components/icons/Github";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const slug = (await params).projectSlug;

  const project = projects.find(
    (project) => getProjectSlug(project.title) === slug
  );
  if (!project) return null;

  function getMonths(start: string, end: string) {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    return months + endDate.getMonth() - startDate.getMonth();
  }

  const monthsWorked = getMonths(project.startDate, project.endDate);
  const gallery = project.assets.filter(
    (asset) => asset.placement === "gallery"
  );

  return (
    <div className="fade-in">
      <p className="mb-4">
        <span className="font-bold">TLDR: </span>
        {project.description}
      </p>

      <p className="mb-4">
        <span className="font-bold">Dev time: </span>
        {monthsWorked} month{monthsWorked > 1 ? "s" : ""}
      </p>
      <p className="mb-4">
        <span className="font-bold">Tech used: </span>
        {project.technologies.join(", ")}
      </p>

      {project.links.length ? (
        <ul className="flex mb-4 overflow-x-scroll">
          {project.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target="_blank"
                title={link.description}
                className="flex items-center text-sm mr-4 bg-black text-white py-1 px-2 shadow hover:underline hover:shadow-lg text-nowrap"
              >
                <span className="size-4 mr-2">
                  <GithubIcon />
                </span>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      <Gallery images={gallery} projectRef={project.title} />

      {project.favoriteFeatures.length ? (
        <h2 className="uppercase font-bold text-xl text-black mt-12 mb-4">
          Favourite features
        </h2>
      ) : null}
      {project.learnings.length ? (
        <h2 className="uppercase font-bold text-xl text-black mt-12 mb-4">
          Learnings
        </h2>
      ) : null}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const slug = (await params).projectSlug;
  const project = projects.find(
    (project) => getProjectSlug(project.title) === slug
  );
  if (!project) return null;
  return {
    title: `Projects · ${project.title}`,
  };
}
