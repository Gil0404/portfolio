import Hero from "@/components/page/home/hero";
import Navbar from "@/components/reusable/navbar";
import divider from "@/app/img/divider.svg";
export default function Home() {
  return (
    <div className="w-screen">
      <Navbar></Navbar>
      <div className="md:pt-16 pt-16 sm:pt-0 ">
        <Hero></Hero>

        <div
          className="w-screen h-96"
          style={{
            backgroundImage: `url('${divider.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      {/* about */}
      <div className="w-screen bg-high h-screen" id="about"></div>
    </div>
  );
}
