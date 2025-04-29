import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const userPref = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    document.documentElement.setAttribute("data-theme", userPref);
    setTheme(userPref);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="container mx-auto flex justify-between items-center py-5 px-5">
      <a className="btn btn-ghost normal-case text-xl">
        🎙️Топкастът
      </a>

      <div className="flex gap-4 items-center">
        <nav className="hidden md:flex space-x-2">
          <a href="#about" className="btn btn-ghost text-base">
            За мен
          </a>
          <a href="#episodes" className="btn btn-ghost text-base">
            Епизоди
          </a>
          <a href="#contact" className="btn btn-ghost text-base">
            Контакти
          </a>
        </nav>

        <button
          className="btn btn-sm btn-circle"
          onClick={toggleTheme}
          aria-label="Смени тема"
        >
          {theme === "dark" ? (
            <Icon icon="solar:sun-linear" width="24" height="24" />
          ) : (
            <Icon icon="solar:moon-outline" width="24" height="24" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
