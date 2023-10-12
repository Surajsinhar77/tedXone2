import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-[100vh] w-auto bg-gradient-to-t  from-gray-800 to-red-600 flex flex-row items-center justify-center">
        <div className="mainHeading flex flex-col items-center">
          <h1 className="text-[500%] text-white uppercase font-medium">
            Are you ready ?
          </h1>

          <button className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-100 text-red-600 text-[15rem] relative">
            <span>X</span>
          </button>
        </div>
      </div>
    </main>
  );
}
