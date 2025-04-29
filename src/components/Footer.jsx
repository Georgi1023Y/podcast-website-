import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-200 mt-auto">
      <div className="flex flex-col items-center justify-center gap-3">
        <p>
          © {new Date().getFullYear()} Топкаста на Божидар - Всички права са
          запазени.
        </p>
        <div className="flex items-center justify-center gap-3.5">
          <a href="https://www.youtube.com/@bstopcastbulgaria">
            <Icon
              icon="iconoir:youtube"
              width="28"
              height="28"
              className="hover:scale-105 transition-transform duration-300"
            />
          </a>
          <a href="https://www.instagram.com/bbojidarssirakov/">
            <Icon
              icon="hugeicons:instagram"
              width="24"
              height="24"
              className="hover:scale-105 transition-transform duration-300"
            />
          </a>
          <a>
            <Icon
              icon="hugeicons:tiktok"
              width="24"
              height="24"
              className="hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
