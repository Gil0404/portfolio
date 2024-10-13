import Socials from "@/components/reusable/socials";
import prof from "@/app/img/prof.jpg";

export default function Hero() {
  return (
    <div className=" flex md:flex-row  sm:flex-col w-screen max-w-normal min-h-normalh mx-auto md:justify-normal md:items-start sm:justify-center sm:items-center  p-5 ">
      <div className="flex flex-col w-1/2 h-full  justify-center items-center my-auto ">
        <div className="text-left text-dark md:text-left sm:text-center ">
          <h1 className="text-dark  font-Fredoka font-extrabold text-7xl sm:text-5xl">
            Hey There! I’m <span className="text-high font-extrabold">GIL</span>
          </h1>
          <p className=" md:text-3xl font-bold md:text-left sm:text-center sm:text-xl">
            A Web Developer
          </p>
          <p className=" font-normal text-xl md:text-left sm:text-center sm:text-sm">
            Delivering innovative solutions with skills in
            <br /> React.js, Next.js, Firebase, Node.js, GitHub, and Git.
          </p>
          <div className="flex justify-center sm:items-center md:justify-start">
            <Socials></Socials>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-1/2 justify-center items-center my-auto ">
        <div
          className="sm:w-64 sm:h-64 md:w-96 md:h-96 animate-blob del bg-high drop-shadow-3xl overflow-visible  aspect-square "
          style={{
            backgroundImage: `url('${prof.src}')`,
            backgroundPositionX: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}
