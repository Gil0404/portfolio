import Hero from "@/components/page/home/hero";
import Navbar from "@/components/reusable/navbar";
import divider from "@/app/img/div2.svg";
import About from "@/components/page/home/about";
import HomeProject from "@/components/page/home/projects";
import Technology from "@/components/reusable/technology";
export default function Home() {
  return (
    <section className="w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll h-screen scroll-smooth ">
      <Navbar></Navbar>
      <div className="md:pt-16 pt-16 sm:pt-0  snap-center" id="home">
        <Hero></Hero>
      </div>

      <div
        className="w-screen h-96 translate-y-1  "
        style={{
          backgroundImage: `url('${divider.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className=" flex  items-center scroll-m-96 w-screen h-56 bg-high snap-start md:h-56 sm:h-32">
        <Technology></Technology>
      </div>
      <div
        className="w-screen h-96 translate-y-1"
        style={{
          backgroundImage: `url('${divider.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          rotate: "180deg",
        }}
      ></div>

      <div
        className=" scroll-m-16 w-screen bg-white min-h-normalh md:h-[1000px] xl:h-[1000px] snap-center sm:h-screen my-16"
        id="projects"
      >
        <HomeProject></HomeProject>
      </div>
      <div
        className="w-screen h-96 translate-y-1  "
        style={{
          backgroundImage: `url('${divider.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="w-screen bg-high min-h-normalh scroll-m-16  snap-center"
        id="about"
      >
        <About></About>
      </div>

      <div
        className="w-screen h-96 translate-y-1"
        style={{
          backgroundImage: `url('${divider.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          rotate: "180deg",
        }}
      ></div>
    </section>
  );
}
