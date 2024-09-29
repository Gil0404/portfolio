import Socials from "@/components/reusable/socials";

export default function Hero() {
  return (
    <div className=" flex md:flex-row  sm:flex-col w-screen max-w-normal h-screen bg-background mx-auto">
      <div className="flex flex-col w-2/3 h-full  justify-center items-center">
        <div className="text-left text-dark">
          <h1 className="text-dark  font-Fredoka font-extrabold text-5xl">
            Hey There! I’m <span className="text-high font-extrabold">GIL</span>
          </h1>
          <h3 className=" text-2xl font-bold text-left">A Web Developer</h3>
          <p className=" font-normal text-base text-left">
            Delivering innovative solutions with skills in
            <br /> React.js, Next.js, Firebase, Node.js, GitHub, and Git.
          </p>
          <Socials></Socials>
        </div>
      </div>
      <div className="flex flex-col h-full w-1/3 justify-center items-center">
        <h1 className="text-dark  font-lato font-extrabold text-5xl">
          <span className="text-main">I'm</span> GILBERT{" "}
        </h1>
      </div>
    </div>
  );
}
