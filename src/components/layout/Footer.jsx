import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-3 bg-gray-900 border-t border-gray-800 text-gray-400 text-sm text-center">
      &copy; {new Date().getFullYear()} My Diary. All rights reserved.
    </footer>
  );
}