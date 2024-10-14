import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-start text-left text-sm text-gray-100 font-outfit py-3">
      <div className="flex flex-row items-center justify-between md:w-[80rem] gap-10">
        {/* Updated email button */}
        <a
          className="flex flex-row items-center justify-start gap-[20px] no-underline bg-[#141629] rounded-full px-9 py-4 hover:bg-[#1e2040] transition-colors duration-300"
          href="mailto:app.yusufyildirim@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="relative w-[31px] h-[31px] shrink-0"
            alt="Email icon"
            src="/mail.svg"
          />
          <div className="relative leading-[21px] flex items-center w-[74.72px] h-[18px] shrink-0">
            <p className="text-[inherit] [line-break:anywhere] w-full text-white">
              Get in touch
            </p>
          </div>
        </a>

        {/* Updated social links */}
        <div className="flex flex-row py-[5px] px-px items-center justify-start gap-[12px] text-right text-white">
          <div className="flex flex-row py-px px-0 items-start justify-start">
            <div className="relative leading-[21px]">
              <a
                className="text-[inherit] hover:text-white transition-colors duration-300"
                href="https://www.linkedin.com/in/dev-yusuf/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <span className="text-white mx-2">/</span>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end justify-center">
            <div className="relative leading-[21px] flex items-center w-[71.48px] h-[18px] shrink-0">
              <a
                className="text-[inherit] hover:text-white transition-colors duration-300"
                href="https://instagram.com/yusufiyldrm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative box-border w-[1140px] h-[1.39px] shrink-0 border-t-[1.4px] border-solid border-gray-200" /> */}
    </div>
  );
};

export default Header;
