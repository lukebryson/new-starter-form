// src/DirectoriesAndAccess.jsx
export default function DirectoriesAndAccess({ formData, handleChange }) {
  const sharepointSites = [
    "Development",
    "Finance",
    "Group",
    "HR",
    "H&S",
    "Investment",
    "IT",
    "Marketing",
    "Office Information",
    "Property",
    "Property Individual",
    "Social Impact",
    "Statutory Entities",
    "Sustainability"
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Directories &amp; Access</h2>
      <div className="space-y-4">
        <span className="font-medium block mb-1">File Access- SharePoint Sites</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {sharepointSites.map(site => (
            <label key={site} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="fileAccess"
                value={site}
                checked={formData.fileAccess?.includes(site)}
                onChange={handleChange}
                className="accent-blue-600"
              />
              <span>{site}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
