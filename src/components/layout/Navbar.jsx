import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-900 border-b border-gray-800 shadow-sm">
      <div className="text-xl font-bold text-white tracking-wide">
        My Diary
      </div>
      <div className="flex items-center gap-3">
        {/* Example extra nav actions */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition text-sm">
          Export
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-1 rounded transition text-sm">
          Settings
        </button>
      </div>
    </nav>
  );
}