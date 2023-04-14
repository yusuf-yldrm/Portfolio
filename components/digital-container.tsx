import type { NextPage } from "next";
import ContainerLatestShots from "./container-latest-shots";

const DigitalContainer: NextPage = () => {
  return (
    <div className="flex flex-col p-2.5 items-center justify-start gap-[27px] text-center text-sm text-darkgray font-outfit">
      <img
        className="relative w-[120px] h-[120px] shrink-0 object-cover"
        alt=""
        src="/profile.png"
      />
      <div className="flex flex-row items-center justify-center gap-[5.25px]">
        <div className="relative leading-[14px]">Hi, I'm Yusuf</div>
        <img
          className="relative w-3.5 h-[17px] shrink-0 overflow-hidden"
          src="/openai.svg"
        />
      </div>
      <div className="flex flex-col py-0 items-center justify-start text-13xl md:text-37xl">
        <div className="relative leading-[64px]  flex items-center justify-center  shrink-0">
          Building digital <br />
          products, mobile apps, <br />
          and Experience.
        </div>
      </div>
    </div>
  );
};

export default DigitalContainer;
