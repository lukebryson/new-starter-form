// src/HardwareRequirements.jsx
export default function HardwareRequirements({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Hardware Requirements</h2>
      <div className="space-y-4">
        <label className="inline-flex items-center space-x-2">
          <input 
            name="needsLaptop" 
            type="checkbox" 
            checked={formData.needsLaptop} 
            onChange={handleChange} 
          />
          <span className="font-medium">Laptop Required?</span>
        </label>
        <label className="block">
          <span className="font-medium">Laptop Type/Notes</span>
          <input 
            name="laptopType" 
            type="text" 
            value={formData.laptopType} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            placeholder="e.g. MacBook Pro" 
          />
        </label>
      </div>
    </div>
  );
}
