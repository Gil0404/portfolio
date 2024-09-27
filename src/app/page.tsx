import Hero from "@/components/page/home/hero";
import Navbar from "@/components/reusable/navbar";

export default function Home() {
  return (
    <div className="w-screen">
      <Navbar></Navbar>
      <div className="md:pt-16 pt-16 sm:pt-0 ">
        <Hero></Hero>
        <div className="w-screen h-96 bg-slate-900"></div>
      </div>
    </div>
  );
}
