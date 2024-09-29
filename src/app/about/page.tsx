import Hero from "@/components/page/home/hero";
import Navbar from "@/components/reusable/navbar";

export default function About() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:pt-16 pt-16 sm:pt-0 ">
        <Hero></Hero>
      </div>
    </div>
  );
}
