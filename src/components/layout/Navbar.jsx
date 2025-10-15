import React from "react";

export default function Navbar({ theme, setTheme }) {
  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-900 dark:bg-gray-900 bg-gray-100 border-b border-gray-800 shadow-sm">
      <div className="text-xl font-bold dark:text-white text-gray-900 tracking-wide">
        Open Here
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={handleToggle}
          className="flex items-center px-3 py-1 rounded transition text-sm bg-gray-800 dark:bg-gray-700 text-gray-200 dark:text-gray-300 hover:bg-blue-600 hover:text-white"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span className="mr-2">
            {theme === "dark" ? "🌙" : "☀️"}
          </span>
          {theme === "dark" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
}