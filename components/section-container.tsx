import type { NextPage } from "next";

const SectionContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-gray-300 flex flex-row py-[61px] px-10 md:px-20 items-center justify-between border-t-[1px] border-solid border-gray-200 border-b-[1px]">
      <img
        className="relative shrink-0 overflow-hidden h-8"
        alt=""
        src="/flutter.svg"
      />
      <img
        className="relative  h-8 w-8 shrink-0 overflow-hidden"
        alt=""
        src="/react.svg"
      />
      <img
        className="relative shrink-0 h-8 w-8 overflow-hidden"
        alt=""
        src="/node.svg"
      />
      <img
        className="relative shrink-0 h-8  w-8  overflow-hidden"
        alt=""
        src="/firebase.svg"
      />
      <img
        className="relative h-8 shrink-0 w-20 md:w-28 overflow-hidden"
        alt=""
        src="/revenuecat.svg"
      />
      <img
        className="relativeshrink-0 h-8 w-8 overflow-hidden"
        alt=""
        src="/openai.svg"
      />
    </div>
  );
};

export default SectionContainer;
