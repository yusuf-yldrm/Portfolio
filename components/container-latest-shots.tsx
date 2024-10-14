import type { NextPage } from "next";

type ContainerLatestShotsType = {
  sectionTitle?: string;
  latestShotIds?: string;
};

const ContainerLatestShots: NextPage<ContainerLatestShotsType> = ({
  sectionTitle,
  latestShotIds,
}) => {
  return (
    <a
      className="rounded-10xs flex flex-row py-[25px] pr-[49px] pl-12 items-start justify-start text-center text-base text-white font-outfit border-[1px] border-solid border-gray-200"
      href="mailto:app.yusufyildirim@gmail.com"
      target="_blank"
    >
      <div className="flex flex-row pt-0 px-0 pb-[3.1399993896484375px] items-start justify-start gap-[15.08px]">
        <div className="relative leading-[16px]">{sectionTitle}</div>
        <img
          className="relative w-4 h-[15px] shrink-0 overflow-hidden"
          alt="arrow"
          src={latestShotIds}
        />
      </div>
    </a>
  );
};

export default ContainerLatestShots;
