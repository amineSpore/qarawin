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