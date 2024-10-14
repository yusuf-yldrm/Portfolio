import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row py-[7px] px-2.5 items-center justify-center gap-[633px]">
      <div className="relative leading-[21px] flex items-center w-[164.86px] h-[18px] shrink-0">
        © 2023 All rights reserved.
      </div>
      <div className="flex flex-row p-px items-center justify-center gap-[10px] text-right text-darkgray">
        <div className="w-[157.44px] h-[21px] shrink-0 flex flex-col items-end justify-center">
          <div className="relative leading-[21px] flex items-center w-[68.9px] h-[18px] shrink-0">
            <span className="[line-break:anywhere] w-full">
              <a
                className="text-[inherit]"
                href="https://www.linkedin.com/in/dev-yusuf/"
                target="_blank"
              >
                <span>Linkedin</span>
              </a>
              <span className="text-gray-100"> /</span>
            </span>
          </div>
        </div>

        <a
          className="relative leading-[21px] text-[inherit] flex items-center w-[64.18px] h-[18px] shrink-0 [text-decoration:none]"
          href="https://instagram.com/yusufiyldrm"
          target="_blank"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
