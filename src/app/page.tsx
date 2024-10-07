import Hero from "@/components/page/home/hero";
import Navbar from "@/components/reusable/navbar";
import divider from "@/app/img/div2.svg";
import About from "@/components/page/home/about";
import HomeProject from "@/components/page/home/projects";
export default function Home() {
  return (
    <div className="w-screen">
      <Navbar></Navbar>
      <div className="md:pt-16 pt-16 sm:pt-0 ">
        <Hero></Hero>

        {/* <div
          className="w-screen h-96 translate-y-1 "
          style={{
            backgroundImage: `url('${divider.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div> */}
      </div>
      <div
        className="w-screen bg-white min-h-normalh scroll-m-16 snap-y "
        id="projects"
      >
        <HomeProject></HomeProject>
      </div>

      {/* <div
        className="w-screen h-96 translate-y-1"
        style={{
          backgroundImage: `url('${divider.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          rotate: "180deg",
        }}
      ></div> */}
    </div>
  );
}
