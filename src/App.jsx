import React from "react";
import "./index.css";
import Layout from "./components/layout/Layout";
import Editor from "./components/Editor";

// Placeholder data and functions
const selectedEntry = { id: 1, title: "Sample Entry", content: "This is a sample entry." };
const handleSaveEntry = (entry) => {
  console.log("Saving entry:", entry);
};
const handleSummarizeEntry = (entry) => {
  console.log("Summarizing entry:", entry);
};


export default function App() {
  return (
    <div>
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
