// src/UserDetails.jsx
export default function UserDetails({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">User Details</h2>
      <div className="space-y-4">
        <label className="block">
          <span className="font-medium">Full Name *</span>
          <input 
            name="fullName" 
            type="text" 
            value={formData.fullName} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />
        </label>
        <label className="block">
          <span className="font-medium">Job Role *</span>
          <input 
            name="role" 
            type="text" 
            value={formData.role} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />
        </label>
        <label className="block">
          <span className="font-medium">Start Date *</span>
          <input 
            name="startDate" 
            type="date" 
            value={formData.startDate} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />
        </label>
      </div>
    </div>
  );
}
