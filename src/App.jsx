import { useState } from "react";
import "./index.css";

export default function App() {
  const [form, setForm] = useState({
    fullName: "",
    jobRole: "",
    startDate: "",
  });

  // Handles input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <main className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-[#00823B] mb-4">
        New Starter Form
      </h1>

      {/* Section 1 – User Details */}
      <form className="space-y-4" autoComplete="off">
        <label className="block">
          <span className="font-medium">Full Name *</span>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <label className="block">
          <span className="font-medium">Job Role *</span>
          <input
            type="text"
            name="jobRole"
            value={form.jobRole}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <label className="block">
          <span className="font-medium">Start Date *</span>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </label>
      </form>
    </main>
  );
}
