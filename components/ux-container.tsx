import type { NextPage } from "next";

const KnowLedgeContainer = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-row py-2.5 px-[18px] items-start justify-start text-left text-lg text-gray-100 font-outfit">
      <div className="h-full bg-gray-300 flex flex-col py-12 px-[21px] items-start justify-start gap-[30px] border-[1px] border-solid border-gray-200">
        <img
          className="relative w-11 h-11 shrink-0 overflow-hidden"
          alt=""
          src={`${icon}.svg`}
        />
        <div className="relative leading-[18px]  flex items-center  shrink-0">
          {title}
        </div>
        <div className="shrink-0 flex flex-col pt-px px-0 pb-0 box-border items-start justify-start  text-sm">
          <div className="relative leading-[20px] font-light flex items-center w-[179.12px]  shrink-0">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowLedgeContainer;
