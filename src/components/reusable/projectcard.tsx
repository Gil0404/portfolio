"use client";

import { useInView } from "framer-motion";

import { useRef } from "react";

type projectType = { title: string; img: string; set: number };

function Cards({ title, img, set }: projectType) {
  const viewref = useRef(null);
  const inview = useInView(viewref);

  const style1 = {
    transform: inview ? "none" : "translateX(-200px)",
    opacity: inview ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
  const style2 = {
    transform: inview ? "none" : "translateX(200px)",
    opacity: inview ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) .5s",
  };
  return (
    <div
      className={` w-full min-h-full p-7 bg-background rounded-[35px] flex snap-center snap-always drop-shadow-md overflow-hidden  ${
        set % 2
          ? " xl:flex-row md:flex-col  sm:flex-col "
          : "xl:flex-row-reverse md:flex-col-reverse sm:flex-col-reverse"
      } `}
    >
      <div
        ref={viewref}
        style={set % 2 ? style1 : style2}
        className="w-1/2 h-full bg-high rounded-[45px] overflow-hidden md:w-full sm:w-full"
      >
        <div
          className="w-1/2 h-1/4  delay-75  flex justify-center items-center py-16  md:w-full sm:w-full"
          // style={{
          //   backgroundImage: `url("https://cdn.prod.website-files.com/66e3df8d47eb3991ca9dbef7/66f257dcb7e01b8ca88410bc_Top%20Left.svg")`,
          //   backgroundSize: "cover",
          // }}
        >
          <h1 className="text-background font-extrabold text-6xl text-wrap p-5 uppercase">
            {title}
          </h1>
        </div>
      </div>
      <div
        ref={viewref}
        style={set % 2 ? style2 : style1}
        className="w-1/2 h-full justify-center items-center flex text-4xl text-wrap p-4 text-center md:w-full sm:w-full"
      >
        <h1>{img}</h1>
      </div>
    </div>
  );
}
function MobileCards({ title, img, set }: projectType) {
  return (
    <>
      <div className="flex flex-col min-h-[78vh] w-full bg-high snap-start rounded-[50px] overflow-hidden justify-end ">
        <div className="text-sm bg-mirror rounded-lg shadow-lg py-10 px-6 text-white">
          <h1 className="text-lg uppercase font-extrabold ">
            {title + img + set}
          </h1>
          <p>DAS</p>
        </div>
      </div>
    </>
  );
}

export default function ProjectsCard() {
  const project = [
    {
      title: "a",
      img: "DDAAA",
    },
    {
      title: "b",
      img: "b",
    },
    {
      title: "c",
      img: "c",
    },
    {
      title: "d",
      img: "d",
    },
    {
      title: "e",
      img: "e",
    },
    {
      title: "f",
      img: "f",
    },
  ];
  return (
    <>
      <div className="  flex-col max-w-normal h-normalh gap-4 bg-white p-2 overflow-x-hidden overflow-y-scroll -scroll-m-7 scroll-smooth rounded-[50px] snap-y snap-mandatory sm:hidden md:flex xl:flex">
        {project.map((projects, index) => {
          return (
            <Cards
              title={projects.title}
              img={projects.img}
              key={index}
              set={index}
            ></Cards>
          );
        })}
      </div>

      <div className=" flex-col max-w-normal h-[80vh] gap-4 bg-white p-2 overflow-x-hidden overflow-y-scroll -scroll-m-7 scroll-smooth rounded-[50px] snap-y snap-mandatory sm:flex md:hidden xl:hidden">
        {project.map((projects, index) => {
          return (
            <MobileCards
              title={projects.title}
              img={projects.img}
              set={index}
              key={index}
            ></MobileCards>
          );
        })}
      </div>
    </>
  );
}
