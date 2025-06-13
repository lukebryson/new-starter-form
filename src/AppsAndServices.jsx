// src/AppsAndServices.jsx
export default function AppsAndServices({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Apps &amp; Services</h2>
      <div className="space-y-4">
        <label className="inline-flex items-center space-x-2">
          <input 
            name="needsEmailAccount" 
            type="checkbox" 
            checked={formData.needsEmailAccount} 
            onChange={handleChange} 
          />
          <span className="font-medium">Email Account Needed?</span>
        </label>
        <label className="block">
          <span className="font-medium">Additional Software/Access</span>
          <input 
            name="otherApps" 
            type="text" 
            value={formData.otherApps} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            placeholder="e.g. VPN, Salesforce" 
          />
        </label>
      </div>
    </div>
  );
}
