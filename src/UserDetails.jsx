// src/UserDetails.jsx
export default function UserDetails({ formData, handleChange }) {
  const departments = [
    "Development",
    "Finance",
    "HR",
    "Investment",
    "IT",
    "Marketing",
    "PA",
    "Portfolio",
    "Rotation (Property)",
    "Other"
  ].sort();

  // Move "Other" to the end after sorting
  const sortedDepartments = departments.filter(d => d !== "Other").sort();
  sortedDepartments.push("Other");

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">User Details</h2>
      <div className="space-y-4">
        <label className="block">
          <span className="font-medium">Forename *</span>
          <input
            name="forename"
            type="text"
            value={formData.forename}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block">
          <span className="font-medium">Surname *</span>
          <input
            name="surname"
            type="text"
            value={formData.surname}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <div>
          <span className="font-medium block mb-1">Department *</span>
          <div className="flex flex-wrap gap-4">
            {sortedDepartments.map((dept) => (
              <label key={dept}>
                <input
                  type="radio"
                  name="department"
                  value={dept}
                  checked={formData.department === dept}
                  onChange={handleChange}
                  required
                />{" "}
                {dept}
              </label>
            ))}
            {formData.department === "Other" && (
              <input
                name="departmentOther"
                type="text"
                value={formData.departmentOther || ""}
                onChange={handleChange}
                className="ml-2 p-2 border rounded"
                placeholder="Please specify"
                required
              />
            )}
          </div>
        </div>
        <label className="block">
          <span className="font-medium">Job Title *</span>
          <input
            name="jobTitle"
            type="text"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block">
          <span className="font-medium">Designatory Letters (e.g., MRICS, MCIPD, MBCS)</span>
          <input
            name="designatoryLetters"
            type="text"
            value={formData.designatoryLetters}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g., MRICS, MCIPD, MBCS"
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
