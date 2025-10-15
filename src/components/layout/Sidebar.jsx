import React from "react";

export default function Sidebar({ entries = [], onSelect, selectedId }) {
  return (
    <aside className="w-64 bg-gray-950 border-r border-gray-800 overflow-y-auto h-full flex-shrink-0">
      <div className="p-4 text-lg text-white font-semibold border-b border-gray-800">
        Entries
      </div>
      <ul>
        {entries.length === 0 && (
          <li className="p-4 text-gray-500">No entries yet.</li>
        )}
        {entries.map((entry) => (
          <li
            key={entry.id}
            className={`cursor-pointer px-4 py-3 border-b border-gray-900 hover:bg-gray-900 ${
              selectedId === entry.id ? "bg-gray-800" : ""
            }`}
            onClick={() => onSelect(entry)}
          >
            <div className="text-sm text-gray-200">{entry.title || "Untitled"}</div>
            <div className="text-xs text-gray-500">
              {new Date(entry.date).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}