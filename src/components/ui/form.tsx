import React from "react";

export default function QarawinForm() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-neutral-900 rounded-lg shadow-xl text-neutral-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Join the Qarawin Community
      </h2>
      {/* Airtable embed */}
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/apppsIb2CeO5bX7az/pagpguK4rclHtkMus/form"
        frameBorder="0"
        width="100%"
        height="533"
        style={{ background: "transparent", border: "1px solid #ccc" }}
        title="Airtable Form"
      />
    </div>
  );
}