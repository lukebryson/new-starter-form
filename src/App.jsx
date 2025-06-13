// src/App.jsx
import { useState } from "react";
import UserDetails from "./UserDetails.jsx";
import HardwareRequirements from "./HardwareRequirements.jsx";
import AppsAndServices from "./AppsAndServices.jsx";
import DirectoriesAndAccess from "./DirectoriesAndAccess.jsx";
import ReviewAndSubmit from "./ReviewAndSubmit.jsx";

export default function App() {
  // Shared form state across all steps
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    startDate: "",
    needsLaptop: false,
    laptopType: "",
    needsEmailAccount: false,
    otherApps: "",
    sharepointSites: "",
    needsDistributionList: false,
  });
  const [step, setStep] = useState(1);

  // Handle input changes for text, date, and checkbox fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Navigation handlers for Next/Back buttons
  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  // Submit handler (placeholder implementation)
  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    // In a real app, you'd send formData to a server or API here
  };

  return (
    <main className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-assuraGreen mb-4">New Starter Form</h1>

      {/* Render the current section based on the step */}
      {step === 1 && (
        <UserDetails formData={formData} handleChange={handleChange} />
      )}
      {step === 2 && (
        <HardwareRequirements formData={formData} handleChange={handleChange} />
      )}
      {step === 3 && (
        <AppsAndServices formData={formData} handleChange={handleChange} />
      )}
      {step === 4 && (
        <DirectoriesAndAccess formData={formData} handleChange={handleChange} />
      )}
      {step === 5 && (
        <ReviewAndSubmit formData={formData} />
      )}

      {/* Navigation buttons */}
      <div className="mt-4 flex justify-between">
        {step > 1 && (
          <button 
            type="button" 
            onClick={prevStep} 
            className="px-4 py-2 border rounded"
          >
            Back
          </button>
        )}
        {step < 5 ? (
          <button 
            type="button" 
            onClick={nextStep} 
            className="px-4 py-2 border rounded"
          >
            Next
          </button>
        ) : (
          <button 
            type="button" 
            onClick={handleSubmit} 
            className="px-4 py-2 border rounded bg-green-600 text-white"
          >
            Submit
          </button>
        )}
      </div>
    </main>
  );
}

