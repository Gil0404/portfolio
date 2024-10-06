"use client";
import { db } from "@/lib/firebase/firebase";
import { addDoc, collection, Firestore } from "firebase/firestore";
import { inView, useInView } from "framer-motion";
import { title } from "process";
import { useRef } from "react";

type projectType = { title: string; img: string; set: number };
// const lol = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };
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
      className={` w-full min-h-normalh bg-green-700 flex ${
        set % 2 ? "flex-row" : "flex-row-reverse"
      } `}
    >
      <div
        ref={viewref}
        style={set % 2 ? style1 : style2}
        className="w-1/2 h-normalh bg-fuchsia-300"
      >
        img
      </div>
      <div
        ref={viewref}
        style={set % 2 ? style2 : style1}
        className="w-1/2 h-normalh bg-blue-300"
      >
        title
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
    <div className=" flex flex-col max-w-normal min-h-normalh gap-3 bg-yellow-300 p-4 overflow-x-hidden ">
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
