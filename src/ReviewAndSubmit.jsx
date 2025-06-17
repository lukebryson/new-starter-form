import React from "react";

export default function ReviewAndSubmit({ formData }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review &amp; Submit</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded shadow bg-white">
          <tbody>
            {/* User Details */}
            <tr className="bg-gray-100">
              <th colSpan={2} className="text-left px-4 py-2 font-bold text-base border-b border-gray-300">
                User Details
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold w-48">First Name</td>
              <td className="px-4 py-2">{formData.firstName || <span className="text-gray-400">—</span>}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Last Name</td>
              <td className="px-4 py-2">{formData.lastName || <span className="text-gray-400">—</span>}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Email</td>
              <td className="px-4 py-2">{formData.email || <span className="text-gray-400">—</span>}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Department</td>
              <td className="px-4 py-2">{formData.department || <span className="text-gray-400">—</span>}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Job Title</td>
              <td className="px-4 py-2">{formData.jobTitle || <span className="text-gray-400">—</span>}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Start Date</td>
              <td className="px-4 py-2">{formData.startDate || <span className="text-gray-400">—</span>}</td>
            </tr>

            {/* Hardware Requirements */}
            <tr className="bg-gray-100">
              <th colSpan={2} className="text-left px-4 py-2 font-bold text-base border-b border-gray-300">
                Hardware Requirements
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Hardware</td>
              <td className="px-4 py-2">
                {Array.isArray(formData.hardware) && formData.hardware.length > 0
                  ? formData.hardware.join(", ")
                  : <span className="text-gray-400">No hardware selected</span>}
              </td>
            </tr>

            {/* Apps & Services */}
            <tr className="bg-gray-100">
              <th colSpan={2} className="text-left px-4 py-2 font-bold text-base border-b border-gray-300">
                Apps &amp; Services
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold align-top">Selected Apps</td>
              <td className="px-4 py-2">
                {Array.isArray(formData.selectedApps) && formData.selectedApps.length > 0
                  ? (
                    <ul className="list-disc ml-4">
                      {formData.selectedApps.map(app => (
                        <li key={app}>{app}</li>
                      ))}
                    </ul>
                  )
                  : <span className="text-gray-400">No apps/services selected</span>}
              </td>
            </tr>
            {Array.isArray(formData.dynamicsApps) && formData.dynamicsApps.length > 0 && (
              <tr>
                <td className="px-4 py-2 font-semibold align-top">Dynamics 365 Apps</td>
                <td className="px-4 py-2">
                  <ul className="list-disc ml-4">
                    {formData.dynamicsApps.map(dyn => (
                      <li key={dyn}>{dyn}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            )}
            {formData.otherAppText && (
              <tr>
                <td className="px-4 py-2 font-semibold">Other App/Service</td>
                <td className="px-4 py-2">{formData.otherAppText}</td>
              </tr>
            )}

            {/* Directories & Access */}
            <tr className="bg-gray-100">
              <th colSpan={2} className="text-left px-4 py-2 font-bold text-base border-b border-gray-300">
                Directories &amp; Access
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold align-top">File Access</td>
              <td className="px-4 py-2">
                {Array.isArray(formData.fileAccess) && formData.fileAccess.length > 0
                  ? (
                    <ul className="list-disc ml-4">
                      {formData.fileAccess.map(access => (
                        <li key={access}>{access}</li>
                      ))}
                    </ul>
                  )
                  : <span className="text-gray-400">No directories/access selected</span>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
