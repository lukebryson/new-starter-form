import { useEffect } from "react";

// src/AppsAndServices.jsx
export default function AppsAndServices({ formData, handleChange }) {
  const dynamicsOptions = [
    "Complaints",
    "Compliance Documents",
    "Ire- Acquisitions",
    "UK- Acquisitions",
    "UK- Disposals"
  ];

  // Sorted apps & services
  const appOptions = [
    "PS Financials",
    "Landmark",
    "Argus Enterprise",
    "Adobe Acrobat Pro",
    "Adobe Creative Suite",
    "CaseWare",
    "Dynamics 365",
    "Other"
  ].sort();

  // Ensure selectedApps is always an array in formData
  useEffect(() => {
    if (!Array.isArray(formData.selectedApps)) {
      handleChange({
        target: {
          name: "selectedApps",
          value: [],
          type: "init"
        }
      });
    }
    // eslint-disable-next-line
  }, []);

  // Custom handler for checkboxes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const selected = Array.isArray(formData.selectedApps) ? formData.selectedApps : [];
    let updated;
    if (checked) {
      updated = [...selected, value];
    } else {
      updated = selected.filter((v) => v !== value);
    }
    handleChange({
      target: {
        name: "selectedApps",
        value: updated,
        type: "checkbox-group"
      }
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Apps &amp; Services</h2>
      <p className="mb-4 text-gray-700">
        Please select required applications &amp; services for the new starter.
      </p>
      <div className="space-y-4">
        {appOptions.map((app) => (
          <label key={app} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="selectedApps"
              value={app}
              checked={Array.isArray(formData.selectedApps) && formData.selectedApps.includes(app)}
              onChange={handleCheckboxChange}
            />
            <span>{app}</span>
          </label>
        ))}

        {Array.isArray(formData.selectedApps) && formData.selectedApps.includes("Dynamics 365") && (
          <div className="ml-6">
            <label className="block font-medium mb-1">
              Which Dynamics 365 apps?
            </label>
            <select
              name="dynamicsApp"
              value={formData.dynamicsApp || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select an app</option>
              {dynamicsOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        )}

        {Array.isArray(formData.selectedApps) && formData.selectedApps.includes("Other") && (
          <div className="ml-6">
            <label className="block font-medium mb-1">
              Please specify:
            </label>
            <input
              name="otherAppText"
              type="text"
              value={formData.otherAppText || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter application/service"
            />
          </div>
        )}
      </div>
    </div>
  );
}
