import React, { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  youAre: "",
  interests: [] as string[],
  linkedin: "",
  location: "",
};

const youAreOptions = [
  "Deeptech founder",
  "STEM student",
  "Deeptech investor",
  "Researcher/scientist",
];

const interestOptions = [
  "Biotech/Health",
  "Quantum",
  "AI",
  "Climate / Greentech",
  "Agritech",
  "Spacetech",
  "Advanced materials/manufacturing",
  "Computing infrastructure",
];

export default function QarawinForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, options } = e.target as HTMLSelectElement;
    if (type === "select-multiple") {
      const selected = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setForm((prev) => ({ ...prev, [name]: selected }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Manual validation for all required fields
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.company ||
      !form.youAre ||
      form.interests.length === 0 ||
      !form.location
    ) {
      setStatus("error");
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("YOUR_WEB_APP_URL", { // <--- REPLACE THIS
        method: "POST",
        body: JSON.stringify({
          ...form,
          interests: form.interests.join(", "),
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data.result === "success") {
        setStatus("success");
        setForm(initialState);
        setTimeout(() => setStatus(null), 20000); // Hide message after 20 seconds
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-neutral-900 rounded-lg shadow-xl text-neutral-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">Join the Qarawin Community</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            type="text"
            placeholder="First name"
            className="flex-1 p-3 rounded bg-neutral-800 placeholder-neutral-400"
          />
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            type="text"
            placeholder="Last name"
            className="flex-1 p-3 rounded bg-neutral-800 placeholder-neutral-400"
          />
        </div>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-neutral-800 placeholder-neutral-400"
        />
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          required
          type="text"
          placeholder="Company"
          className="p-3 rounded bg-neutral-800 placeholder-neutral-400"
        />
        <select
          name="youAre"
          value={form.youAre}
          onChange={handleChange}
          required
          className="p-3 rounded bg-neutral-800 text-neutral-100"
        >
          <option value="">You are...</option>
          {youAreOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div>
          <label className="block mb-1 font-semibold">Your interests</label>
          <select
            name="interests"
            multiple
            value={form.interests}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-800 text-neutral-100 h-32"
          >
            {interestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <small className="text-neutral-400 block mt-1">
            Hold Ctrl (Windows) or Cmd (Mac) to select multiple.
          </small>
        </div>
        <input
          name="linkedin"
          value={form.linkedin}
          onChange={handleChange}
          type="url"
          placeholder="LinkedIn (optional)"
          className="p-3 rounded bg-neutral-800 placeholder-neutral-400"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          required
          type="text"
          placeholder="Location"
          className="p-3 rounded bg-neutral-800 placeholder-neutral-400"
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-3 rounded transition"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
        {status === "success" && (
          <div className="text-green-400 text-center font-semibold text-lg mt-4">
            Your answers have been saved.
          </div>
        )}
        {status === "error" && (
          <div className="text-red-400 text-center">Please fill in all required fields.</div>
        )}
      </form>
      <p className="text-xs text-neutral-500 mt-4 text-center">
        All fields are required except LinkedIn.
      </p>
    </div>
  );
}