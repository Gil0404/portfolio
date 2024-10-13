"use client";
import React from "react";
import { motion } from "framer-motion";
import i1 from "@/app/img/icons/1.svg";
import i2 from "@/app/img/icons/2.svg";
import i3 from "@/app/img/icons/3.svg";
import i4 from "@/app/img/icons/4.svg";
import i5 from "@/app/img/icons/5.svg";
import i6 from "@/app/img/icons/6.svg";
import i7 from "@/app/img/icons/7.svg";
import i8 from "@/app/img/icons/8.svg";

function Technology() {
  return (
    <div
      className="flex flex-shrink-0 gap-14 max-w-normal mx-auto overflow-hidden  "
      style={{
        maskImage:
          "linear-gradient(90deg, rgba(126,89,226,0) 0%, rgba(126,89,226,1) 20%, rgba(126,89,226,1) 80%, rgba(126,89,226,0) 100%)",
      }}
    >
      <motion.div
        className="flex flex-row  flex-shrink-0 h-56 gap-14  items-center  "
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          type: "tween",
        }}
      >
        <img
          src={i1.src}
          alt="css"
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i3.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />{" "}
        <img
          src={i2.src}
          alt="f"
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i4.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i5.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i6.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i7.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i8.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
      </motion.div>
      <motion.div
        className="flex flex-row  flex-shrink-0  h-56 gap-14 items-center"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          type: "tween",
        }}
      >
        <img
          src={i1.src}
          alt="css"
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i3.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i2.src}
          alt="f"
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i4.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i5.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i6.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i7.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
        <img
          src={i8.src}
          alt=""
          className="w-36 h-36 sm:w-10 sm:h-10 md:w-32 md:h-32"
        />
      </motion.div>
    </div>
  );
}

export default Technology;
