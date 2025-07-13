import React, { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  youAre: [] as string[],
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

  // Only for text/email/url input fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") return; // checkboxes are handled separately!
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // For checkboxes (arrays)
  const handleCheckboxChange = (name: "youAre" | "interests", opt: string, checked: boolean) => {
    setForm((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name], opt]
        : prev[name].filter((v: string) => v !== opt),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.company ||
      form.youAre.length === 0 ||
      form.interests.length === 0 ||
      !form.location
    ) {
      setStatus("error");
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("YOUR_WEB_APP_URL", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          youAre: form.youAre.join(", "),
          interests: form.interests.join(", "),
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data.result === "success") {
        setStatus("success");
        setForm(initialState);
        setTimeout(() => setStatus(null), 20000);
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
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Join the Qarawin Community
      </h2>
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

        {/* YOU ARE CHECKBOXES */}
        <div>
          <label className="block mb-1 font-semibold">You are</label>
          <div className="flex flex-col gap-2">
            {youAreOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="youAre"
                  value={opt}
                  checked={form.youAre.includes(opt)}
                  onChange={(e) =>
                    handleCheckboxChange("youAre", opt, e.target.checked)
                  }
                  className="accent-qarawin-red"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* INTERESTS CHECKBOXES */}
        <div>
          <label className="block mb-1 font-semibold">Your interests</label>
          <div className="flex flex-col gap-2">
            {interestOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="interests"
                  value={opt}
                  checked={form.interests.includes(opt)}
                  onChange={(e) =>
                    handleCheckboxChange("interests", opt, e.target.checked)
                  }
                  className="accent-qarawin-red"
                />
                {opt}
              </label>
            ))}
          </div>
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
          <div className="text-red-400 text-center">
            Please fill in all required fields.
          </div>
        )}
      </form>
      <p className="text-xs text-neutral-500 mt-4 text-center">
        All fields are required except LinkedIn.
      </p>
    </div>
  );
}