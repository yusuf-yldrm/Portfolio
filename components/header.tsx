import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start text-left text-sm text-gray-100 font-outfit py-3 px-4 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl gap-6 sm:gap-10">
        {/* Email button */}
        <a
          className="flex flex-row items-center justify-center gap-[20px] no-underline bg-[#141629] rounded-full px-6 sm:px-6 py-3 sm:py-2 hover:bg-[#1e2040] transition-colors duration-300 w-full sm:w-auto border border-white"
          href="mailto:app.yusufyildirim@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-6 h-6 sm:w-[31px] sm:h-[31px] shrink-0"
            alt="Email icon"
            src="/mail.svg"
          />
          <p className="text-white whitespace-nowrap">Get in touch</p>
        </a>

        {/* Social links */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-right text-white">
          <a
            className="hover:text-white transition-colors duration-300"
            href="https://www.linkedin.com/in/dev-yusuf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <span className="text-white hidden sm:inline">/</span>
          <a
            className="hover:text-white transition-colors duration-300"
            href="https://instagram.com/yusufiyldrm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <span className="text-gray-100 hidden sm:inline">/</span>
          <a
            className="hover:text-white transition-colors duration-300"
            href="https://github.com/yusuf-yldrm"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
