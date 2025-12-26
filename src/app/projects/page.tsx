import Image from "next/image";
import { fetchProjects } from "../../../lib/queries";
import CreateProjectCard from "../../components/projects";

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <div className="min-h-screen bg-white p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Projects</h2>

        {!projects || projects.length === 0 ? (
          <p className="text-sm text-gray-600">No projects yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p: any) => (
              <div
                key={p.id}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="font-semibold text-gray-900">{p.title}</div>
                <div className="text-sm text-gray-600 mt-1">{p.description}</div>

                <div className="text-sm text-gray-600 mt-1">Owner: {p.owner}</div>

                {p.image_url ? (
                  <div className="mt-3 relative w-full h-40 overflow-hidden rounded-xl border">
                    <Image
                      src={p.image_url}
                      alt={p.title ?? "Project image"}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={70}
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                ) : null}

                <div className="text-xs text-gray-500 mt-3">
                  {p.created_at ? new Date(p.created_at).toLocaleString() : ""}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <CreateProjectCard />
    </div>
  );
}
