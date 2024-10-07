import ProjectsCard from "@/components/reusable/projectcard";

export default function HomeProject() {
  return (
    <>
      <div className="mx-auto max-w-normal min-h-normalh flex flex-col p-10">
        <div className="mb-5">
          <h1 className="text-7xl font-extrabold text-dark drop-shadow-sm">
            Projects
          </h1>
        </div>
        <ProjectsCard></ProjectsCard>
      </div>
    </>
  );
}
