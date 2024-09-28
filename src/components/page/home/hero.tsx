export default function Hero() {
  return (
    <div className=" flex flex-row w-screen max-w-normal h-screen bg-background mx-auto">
      <div className="flex flex-col w-2/3 h-full  justify-center items-center">
        <h1 className="text-dark  font-Fredoka font-extrabold text-5xl">
          Hey There! I’m <span className="text-high font-extrabold">GIL</span>
          <br />
          <h3 className=" text-2xl">A Web Developer</h3>
          <p className=" font-normal text-base">
            As a passionate and dedicated React and Next.js <br /> developer, I
            bring a fresh perspective and innovative <br /> solutions to web
            development. Recently graduated,
            <br /> I have honed my skills in building dynamic, responsive,
            <br /> and user-friendly applications
          </p>
        </h1>
      </div>
      <div className="flex flex-col h-full w-1/3 justify-center items-center">
        <h1 className="text-dark  font-lato font-extrabold text-5xl">
          <span className="text-main">I'm</span> GILBERT D GARCIA{" "}
        </h1>
      </div>
    </div>
  );
}
