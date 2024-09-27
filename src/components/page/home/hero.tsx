"use client";

let w = Math.round(window.innerWidth / 64);
let h = Math.round(window.innerHeight / 64);

export default function Hero() {
  return (
    <div className=" flex flex-col w-screen max-w-normal h-screen bg-background mx-auto">
      <div className="flex flex-col h-full w-full   justify-center items-center">
        <h1 className="text-buttons  font-lato font-extrabold text-5xl">
          <span className="text-main">I'm</span> GILBERT D GARCIA{" "}
        </h1>
      </div>
    </div>
  );
}
