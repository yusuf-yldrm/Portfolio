import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-start text-left text-sm text-gray-100 font-outfit py-5">
      <div className="flex flex-row items-center justify-between md:w-[80rem] gap-10">
        <a
          className="flex flex-row items-center justify-start gap-[20px] no-underline "
          href="mailto:dev.yusufyildirim@gmail.com"
          target="_blank"
        >
          <img
            className="relative w-[61px] h-[61px] shrink-0"
            alt=""
            src="/frame.svg"
          />
          <div className="relative leading-[21px] flex items-center w-[74.72px] h-[18px] shrink-0">
            <p
              // delete underline
              className="text-[inherit] [line-break:anywhere] w-full text-darkgray 
            "
            >
              Get in touch
            </p>
          </div>
        </a>
        <div className="flex flex-row py-[5px] px-px items-center justify-start gap-[12px] text-right text-darkgray">
          <div className="flex flex-row py-px px-0 items-start justify-start">
            <div className="relative leading-[21px]">
              <a
                className="text-[inherit]"
                href="https://www.linkedin.com/in/kawsarvy/"
                target="_blank"
              >
                <span>Linkedin</span>
              </a>
              <span className="text-gray-100">  /</span>
            </div>
          </div>
          <div className=" shrink-0 flex flex-col items-end justify-center">
            <div className="relative leading-[21px] flex items-center w-[71.48px] h-[18px] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <a
                  className="text-[inherit]"
                  href="https://instagram.com/yusufiyldrm"
                  target="_blank"
                >
                  <span>Instagram</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative box-border w-[1140px] h-[1.39px] shrink-0 border-t-[1.4px] border-solid border-gray-200" /> */}
    </div>
  );
};

export default Header;
