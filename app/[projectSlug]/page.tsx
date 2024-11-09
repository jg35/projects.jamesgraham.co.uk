import { getProjectSlug, projects } from "@/app/data/projects";

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

  return (
    <div className="page">
      <p>{project.description}</p>
    </div>
  );
}
