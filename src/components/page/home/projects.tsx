import ProjectsCard from "@/components/reusable/projectcard";

export default function HomeProject() {
  return (
    <>
      <div className="mx-auto max-w-normal min-h-normalh xl:h-normalh md:h-normalh sm:min-h-screen flex flex-col p-10">
        <div className="mb-5">
          <h1 className="md:text-7xl font-extrabold text-dark drop-shadow-sm sm:text-3xl">
            Projects
          </h1>
        </div>
        <ProjectsCard></ProjectsCard>
      </div>
    </>
  );
}
