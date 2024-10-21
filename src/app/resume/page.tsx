// import Hero from "@/components/page/home/hero";
import Navbar from "@/components/reusable/navbar";

export default function Resume() {
  return (
    <>
      <section className="snap-y snap-mandatory overflow-x-hidden overflow-y-scroll h-screen">
        <Navbar></Navbar>
        <div className="md:pt-20 pt-16 sm:pt-0 snap-always max-w-normal mx-auto h-screen snap-start bg-slate-500 text-high text-7xl">
          <iframe
            src="/GilbertGarcia.pdf"
            className=" w-full h-screen bg-red-500 text-orange-700 "
            style={{ background: "#ffffff" }}
          ></iframe>
        </div>
      </section>
    </>
  );
}
