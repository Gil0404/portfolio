"use client";
import { db } from "@/lib/firebase/firebase";
import { addDoc, collection, Firestore } from "firebase/firestore";
import { inView, useInView } from "framer-motion";
import { title } from "process";
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
            Eventure asdasd
          </h1>
        </div>
      </div>
      <div
        ref={viewref}
        style={set % 2 ? style2 : style1}
        className="w-1/2 h-full justify-center items-center flex text-4xl text-wrap p-4 text-center md:w-full sm:w-full"
      >
        <h1>
          Eveasjudhasdjasjdajsdj asdjasjdjasdja sjdjasjdja sjdajajsja sdjas
        </h1>
      </div>
    </div>
  );
}

export default function ProjectsCard() {
  const project = [
    {
      title: "a",
      img: "a",
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
    <div className=" flex flex-col max-w-normal h-normalh gap-4 bg-white p-2 overflow-x-hidden overflow-y-scroll -scroll-m-7 scroll-smooth rounded-[50px] snap-y snap-mandatory  ">
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
  );
}
