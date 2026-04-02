import { NavLink } from "react-router-dom";
import dark from "../../assets/icon/dark.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Projects", path: "/projects" },
  ];

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleDarkClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="flex justify-end items-center w-full  bg-[#edebeb] dark:bg-[#0c203d] shadow-sm px-4 py-5">
      <nav>
        <ul className="flex items-center gap-8">
          {menuItems?.map((item) => (
            <li key={item?.path}>
              <NavLink
                to={item?.path}
                className={({ isActive }) =>
                  `block px-3 py-2 text-[16px] font-medium transition-all hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-white"
                  }`
                }
              >
                {item?.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sağ tərəf */}
      <div className="flex items-center gap-4">
        {/* Dark Mode */}
        <button
          onClick={handleDarkClick}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <img
            src={dark}
            alt="dark mode"
            className="w-5 h-5 object-contain dark:invert"
          />
        </button>

        {/* Lets Talk */}
        <NavLink
          to="/contact"
          className="px-5 py-2 rounded-lg bg-black text-white text-[15px] font-medium hover:bg-gray-800 transition"
        >
          Lets Talk
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
