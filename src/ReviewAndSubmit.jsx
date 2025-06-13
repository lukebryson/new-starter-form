// src/ReviewAndSubmit.jsx
export default function ReviewAndSubmit({ formData }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Review &amp; Submit</h2>
      <p className="mb-4">Please review the information entered below, then submit the form.</p>
      {/* Placeholder: in a real form, you might list out formData here for confirmation */}
      <p className="text-sm text-gray-600">All good? Click **Submit** to finish.</p>
      {/* (Submit button is rendered in App.jsx) */}
    </div>
  );
}
