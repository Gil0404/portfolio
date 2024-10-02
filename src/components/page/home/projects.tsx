import ProjectsCard from "@/components/reusable/projectcard";

export default function HomeProject() {
  return (
    <>
      <div className="mx-auto max-w-normal min-h-normalh flex flex-col p-10">
        <div className="text-7xl font-extrabold text-background">
          <h1>Projects</h1>
        </div>
        <ProjectsCard></ProjectsCard>
      </div>
    </>
  );
}
