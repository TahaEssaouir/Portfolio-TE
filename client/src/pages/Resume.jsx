import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-3xl font-bold text-teal-300 mb-6">My Resume</h1>
      <div className="w-full max-w-3xl h-[80vh] shadow-lg rounded-lg overflow-hidden bg-white">
        <iframe
          src="/Resume.pdf"
          title="Resume"
          width="100%"
          height="100%"
          style={{ minHeight: "80vh", border: "none" }}
        />
      </div>
    </div>
  );
}
