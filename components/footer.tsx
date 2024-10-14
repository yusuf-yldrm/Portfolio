import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dev-yusuf/" },
    { name: "Instagram", url: "https://instagram.com/yusufiyldrm" },
    { name: "GitHub", url: "https://github.com/yusuf-yldrm" },
  ];

  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 w-full max-w-3xl mx-auto">
      <div className="text-sm text-white mb-4 sm:mb-0">
        © {new Date().getFullYear()} All rights reserved.
      </div>
      <div className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4">
        {socialLinks.map((link, index) => (
          <React.Fragment key={link.name}>
            {index > 0 && (
              <span className="text-gray-400 hidden sm:inline">/</span>
            )}
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
