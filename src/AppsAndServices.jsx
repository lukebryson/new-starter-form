import { useEffect } from "react";

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

  // Ensure selectedApps and dynamicsApps are always arrays in formData
  useEffect(() => {
    if (!Array.isArray(formData.selectedApps)) {
      handleChange({
        name: "selectedApps",
        value: [],
      });
    }
    if (!Array.isArray(formData.dynamicsApps)) {
      handleChange({
        name: "dynamicsApps",
        value: [],
      });
    }
    // eslint-disable-next-line
  }, []);

  // Custom handler for main app checkboxes
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
      name: "selectedApps",
      value: updated,
    });
  };

  // Custom handler for Dynamics 365 sub-apps checkboxes
  const handleDynamicsCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const selected = Array.isArray(formData.dynamicsApps) ? formData.dynamicsApps : [];
    let updated;
    if (checked) {
      updated = [...selected, value];
    } else {
      updated = selected.filter((v) => v !== value);
    }
    handleChange({
      name: "dynamicsApps",
      value: updated,
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
            <div className="space-y-2">
              {dynamicsOptions.map((opt) => (
                <label key={opt} className="flex items-center">
                  <input
                    type="checkbox"
                    name="dynamicsApps"
                    value={opt}
                    checked={Array.isArray(formData.dynamicsApps) && formData.dynamicsApps.includes(opt)}
                    onChange={handleDynamicsCheckboxChange}
                  />
                  <span className="ml-2">{opt}</span>
                </label>
              ))}
            </div>
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
