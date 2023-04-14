import type { NextPage } from "next";
import KnowLedgeContainer from "./ux-container";

const CollaborateContainer: NextPage = () => {
  return (
    <div className="flex flex-col p-2.5 items-center justify-start gap-[45px] text-center text-13xl text-gray-100 font-outfit">
      <div className="w-full shrink-0 flex flex-col py-5 box-border items-center justify-center gap-[2px]">
        <div className="relative leading-[40px]  flex items-center justify-center h-10 shrink-0">
          Collaborate with brands and agencies to create impactful results.
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start gap-[45px] text-left text-lg h-[250px]">
        <KnowLedgeContainer
          icon="mobile"
          title="Mobile Application"
          description="Cross-platform mobile apps with native performance."
        />
        <KnowLedgeContainer
          icon="web"
          title="Web Application"
          description="Creating web applications that are fast, secure, and easy to use."
        />
        <KnowLedgeContainer
          icon="design"
          title="UI/UX Design"
          description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
        />
        <KnowLedgeContainer
          icon="growth"
          title="Organic Growth"
          description="Growing apps with the right strategy and tactics."
        />
      </div>
    </div>
  );
};

export default CollaborateContainer;
