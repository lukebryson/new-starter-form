// src/DirectoriesAndAccess.jsx
import React from "react";

const fileOptions = [
  "Development",
  "Finance",
  "Group",
  "HR",
  "H&S",
  "Investment",
  "IT",
  "Marketing & Comms Library",
  "Property",
  "Property Individual",
  "Social Impact",
  "Statutory Entities",
  "Sustainability",
];

export default function DirectoriesAndAccess({ formData, handleChange }) {
  // Handle main file access checkboxes
  const handleFileAccessChange = (e) => {
    const { value, checked } = e.target;
    const selected = Array.isArray(formData.fileAccess) ? formData.fileAccess : [];
    let updated;
    if (checked) {
      updated = [...selected, value];
    } else {
      updated = selected.filter((v) => v !== value);
    }
    handleChange({
      name: "fileAccess",
      value: updated,
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Directories &amp; Access</h2>
      <p className="mb-4 text-gray-700">
        Select which directories and shared drives the new starter will need access to.
      </p>
      <div className="space-y-2">
        {fileOptions.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="checkbox"
              name="fileAccess"
              value={option}
              checked={Array.isArray(formData.fileAccess) && formData.fileAccess.includes(option)}
              onChange={handleFileAccessChange}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
