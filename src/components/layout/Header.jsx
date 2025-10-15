import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800 shadow-sm">
      <div className="text-2xl font-semibold text-white tracking-wide">
        Open Here
      </div>
      <div className="flex items-center gap-4">
        {/* You can add buttons/icons here, e.g. Export, Settings, Profile */}
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Export
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded transition"
        >
          Settings
        </button>
      </div>
    </header>
  );
}