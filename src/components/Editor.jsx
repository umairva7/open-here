import React, { useState, useEffect } from "react";

export default function Editor({ entry, onSave, onSummarize }) {
  const [title, setTitle] = useState(entry?.title || "");
  const [content, setContent] = useState(entry?.content || "");
  const [summary, setSummary] = useState("");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTitle(entry?.title || "");
    setContent(entry?.content || "");
    setSummary("");
  }, [entry]);

  const handleSave = () => {
    if (content.trim()) {
      const newEntry = {
        date: entry?.date || now.toISOString(),
        title,
        content,
        id: entry?.id,
      };
      onSave(newEntry);
      setSummary("");
    }
  };

  const handleSummarize = async () => {
    if (content.trim() && onSummarize) {
      const aiResponse = await onSummarize(content);
      setSummary(aiResponse);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Date/time display */}
      <div className="mb-2 flex">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-gray-100/30 text-xs text-gray-300 font-medium shadow-sm">
          <span className="mr-2">{entry?.date ? "Saved" : "Now"}</span>
          <span>{now.toLocaleString()}</span>
        </span>
      </div>
      <input
        className="bg-gray-900 border-b border-gray-700 p-3 text-xl text-white outline-none mb-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition"
        type="text"
        placeholder="Title (optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="flex-1 bg-gray-950 border border-gray-800 text-gray-200 p-4 rounded-xl resize-none outline-none mb-4 focus:ring-2 focus:ring-blue-500 transition"
        placeholder="Write your thoughts here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ minHeight: "120px" }}
      />
      {/* Buttons are always visible */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition font-semibold shadow-lg focus:ring-2 focus:ring-blue-400"
        >
          Save
        </button>
        <button
          onClick={handleSummarize}
          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-2 rounded-xl transition font-semibold shadow-lg focus:ring-2 focus:ring-green-400"
        >
          Summarize & Motivate Me
        </button>
      </div>
      {summary && (
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-gray-100 mt-2 shadow-lg border border-gray-100/20">
          <div className="font-semibold mb-2 text-green-300">AI Insights</div>
          <div>{summary}</div>
        </div>
      )}
    </div>
  );
}