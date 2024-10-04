"use client";
import { db } from "@/lib/firebase/firebase";
import { addDoc, collection, Firestore } from "firebase/firestore";

const lol = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export default function ProjectsCard() {
  return (
    <div className=" flex flex-col max-w-normal min-h-normalh gap-1 bg-yellow-300 p-4 ">
      <div
        className=" w-full min-h-normalh bg-black flex flex-row"
        onClick={lol}
      ></div>
      <div
        className=" w-full min-h-normalh bg-black flex flex-row"
        onClick={lol}
      ></div>
    </div>
  );
}
