import { useState } from "react";
import "./index.css";

export default function App() {
  const [form, setForm] = useState({ fullName: "", role: "", startDate: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <main className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-assuraGreen mb-4">
        New Starter Form
      </h1>

      {/* Section 1 — User Details */}
      <section className="space-y-4">
        <label className="block">
          <span className="font-medium">Full Name *</span>
          <input
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
            name="role"
            value={form.role}
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
      </section>
    </main>
  );
}
