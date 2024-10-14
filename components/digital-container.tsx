import type { NextPage } from "next";

const DigitalContainer: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4 text-center font-outfit">
      <img
        className="w-24 h-24 rounded-full object-cover"
        alt="Profile"
        src="/profile.png"
      />
      <div className="flex items-center gap-2 text-[50px] ">
        <span>Yusuf Yildirim</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
        Building digital products, mobile apps, and experiences.
      </h1>
      <div className="flex gap-12">
        <a
          href="https://cal.com/yusuf-yildirim"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-500 text-white bg-blue-500 hover:bg-transparent hover:text-blue-500 font-medium py-3 px-8 rounded-full transition duration-300 text-lg"
        >
          Book a Meeting
        </a>
        <a
          href="/Yusuf_Yildirim_Resume.pdf"
          download
          className="border border-green-800 text-white bg-green-800 hover:bg-transparent hover:text-green-800 font-medium py-3 px-8 rounded-full transition duration-300 text-lg"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default DigitalContainer;
