import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-[100vh] w-auto bg-gradient-to-t  from-gray-800 to-red-600 flex flex-row items-center justify-center">
        <div className="mainHeading">
          <h1 className="text-[500%] text-white uppercase font-medium">
            Are you ready ?
          </h1>

          <span className="text-xl flex justify-center items-center flex-row">
            <button className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
              <svg
                className="X-logo border-1"
                xmlns="http://www.w3.org/2000/svg"
                height="19rem"
                viewBox="0 0 384 512"
                style={{ fill: "#b02727" }}
              >
                <path
                  className="border-green-900"
                  d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </main>
  );
}
