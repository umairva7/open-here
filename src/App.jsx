import React from "react";
import "./index.css";
import Layout from "./components/layout/Layout";
import Editor from "./components/Editor";
import Navbar from "./components/layout/Navbar";
import { useState, useEffect } from "react";

// Placeholder data and functions
const selectedEntry = {
  id: 1,
  title: "Sample Entry",
  content: "This is a sample entry.",
};
const handleSaveEntry = (entry) => {
  console.log("Saving entry:", entry);
};
const handleSummarizeEntry = (entry) => {
  console.log("Summarizing entry:", entry);
};


export default function App() {
  // Initialize theme from localStorage or default to dark
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "dark"
  );

  // When theme changes, update html class and localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
      <Navbar theme={theme} setTheme={setTheme} />
      <Layout>
        <h1 className="text-3xl font-bold mb-4">Welcome to Open Here</h1>
        <p className="text-lg">
          Open Here — A quiet space for your loudest feelings.
        </p>
        <Editor
          entry={selectedEntry}
          onSave={handleSaveEntry}
          onSummarize={handleSummarizeEntry}
        />
      </Layout>
    </div>
  );
}
