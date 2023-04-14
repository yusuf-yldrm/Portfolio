import type { NextPage } from "next";
import ContainerLatestShots from "./container-latest-shots";

const StoryContainer: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-[45px] text-center text-13xl md:text-37xl font-outfit">
      <div className="relative box-border w-full h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
      <div className="flex flex-col py-0  items-center justify-start gap-[45px]">
        <div className="flex flex-col py-0 items-center justify-start">
          <div className="relative leading-[64px]  flex items-center justify-center shrink-0">
            Reach me about <br /> your next idea
          </div>
        </div>
        <ContainerLatestShots
          sectionTitle="Get in touch"
          latestShotIds="/svg2.svg"
        />
      </div>
      <div className="relative box-border w-full h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
    </div>
  );
};

export default StoryContainer;
