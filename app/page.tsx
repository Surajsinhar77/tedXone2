import Image from "next/image";


export default function Home() {
  return (
    <main>
      <div className="bg h-[100vh] w-auto flex flex-row items-center justify-center">
        <div className="mainHeading flex flex-col items-center">
          <h1 className="text-[500%] text-white uppercase font-medium font-['Autour_One']">
            Are you ready ?
          </h1>

          <button className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-100 text-red-500 text-[15rem] relative x-for-font">
            <span className="">X</span>
          </button>
        </div>
      </div>
    </main>
  );
}
