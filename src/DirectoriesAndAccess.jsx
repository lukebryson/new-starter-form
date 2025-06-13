// src/DirectoriesAndAccess.jsx
export default function DirectoriesAndAccess({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Directories &amp; Access</h2>
      <div className="space-y-4">
        <label className="block">
          <span className="font-medium">SharePoint/Folder Access</span>
          <input 
            name="sharepointSites" 
            type="text" 
            value={formData.sharepointSites} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            placeholder="e.g. Project X site" 
          />
        </label>
        <label className="inline-flex items-center space-x-2">
          <input 
            name="needsDistributionList" 
            type="checkbox" 
            checked={formData.needsDistributionList} 
            onChange={handleChange} 
          />
          <span className="font-medium">Add to Distribution List?</span>
        </label>
      </div>
    </div>
  );
}
