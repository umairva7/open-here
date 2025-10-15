import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

// children = main content; entries/onSelect/selectedId should be handled in App.jsx
export default function Layout({ children, entries, onSelect, selectedId }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
     
      <div className="flex flex-1">
        <Sidebar entries={entries} onSelect={onSelect} selectedId={selectedId} />
        <main className="flex-1 p-6">{children}</main>
      </div>
      <Footer />
    </div>
  );
}