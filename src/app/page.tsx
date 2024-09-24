export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center bg-teal-950 h-screen w-screen sm:items-start">
      <div className="flex flex-row h-screen max-w-7xl w-screen mx-auto bg-cyan-200">
        <div className="flex flex-col w-1/4 h-screen  bg-slate-950 border-2 rounded-md border-cyan-500 justify-start items-center px-5 py-10">
          <div className="flex w-full h-fit bg-red-500 rounded-full p-1 border-dashed border-2 border-cyan-300 shadow-md">
            <img
              src="../img/profileimg.jpg"
              className="w-full h-fit object-cover rounded-full border-2 border-slate-400 aspect-square"
              alt="Profile"
            />
            <h1 className="font-heading font-extrabold "></h1>
          </div>
        </div>
        <div className="flex w-3/4 h-screen bg-red-50"></div>
      </div>
    </main>
  );
}
