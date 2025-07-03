// src/App.jsx
import { useState, useEffect } from "react";
import UserDetails from "./UserDetails.jsx";
import HardwareRequirements from "./HardwareRequirements.jsx";
import AppsAndServices from "./AppsAndServices.jsx";
import DirectoriesAndAccess from "./DirectoriesAndAccess.jsx";
import ReviewAndSubmit from "./ReviewAndSubmit.jsx";

// Import logo from public folder
import assuraLogo from "./assets/assura_logo.svg"; // (if you want to use the SVG in the future)
import assuraLogoPng from "./assets/assura_logo.png"; // import the PNG

// Navbar component
function Navbar() {
  return (
    <nav className="bg-[#1E3E89] text-white flex items-center justify-center px-4 py-3 mb-8 rounded-b-lg shadow">
      {/* Centered Logo and Title */}
      <div className="flex items-center gap-3">
        <img src={assuraLogo} alt="Assura logo" className="h-12 w-auto" />
        <span className="font-gothic text-xl font-bold tracking-wide">
          New Starter Form
        </span>
      </div>
    </nav>
  );
}

function SplashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src={assuraLogo}
        alt="Assura Logo"
        className="w-64 max-w-xs animate-pulse transition-all duration-700"
        style={{ filter: "drop-shadow(0 0 24px #1E3E89)" }}
      />
    </div>
  );
}

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
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("forward"); // "forward" or "backward"
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500); // 1.5s splash
    return () => clearTimeout(timer);
  }, []);

  // Handle input changes for text, date, and checkbox fields
  const handleChange = (e) => {
    // If e.target is missing, treat as direct value update (from AppsAndServices)
    if (!e.target) {
      // e should be an object: { name, value }
      setFormData((prevData) => ({
        ...prevData,
        [e.name]: e.value,
      }));
      return;
    }

    const { name, value, type, checked } = e.target;

    // Handle checkbox group for selectedApps and fileAccess
    if (name === "selectedApps" || name === "fileAccess") {
      setFormData((prevData) => {
        const arr = Array.isArray(prevData[name]) ? prevData[name] : [];
        if (checked) {
          return { ...prevData, [name]: [...arr, value] };
        } else {
          return { ...prevData, [name]: arr.filter((v) => v !== value) };
        }
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  // Navigation handlers for Next/Back buttons
  const nextStep = () => {
    setDirection("forward");
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => s + 1);
      setAnimating(false);
    }, 400);
  };
  const prevStep = () => {
    setDirection("backward");
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => s - 1);
      setAnimating(false);
    }, 400);
  };

  // Submit handler (updated to always include "Comms Library" and "Office Information")
  const handleSubmit = () => {
    // Ensure fileAccess is an array
    const fileAccess = Array.isArray(formData.fileAccess) ? formData.fileAccess : [];
    // Add required items if not already present
    const required = ["Comms Library", "Office Information"];
    const updatedFileAccess = Array.from(new Set([...fileAccess, ...required]));

    // Submit with updated fileAccess
    const submissionData = {
      ...formData,
      fileAccess: updatedFileAccess,
    };

    console.log("Form Submitted:", submissionData);
    // In a real app, you'd send submissionData to a server or API here
  };

  // Always include these in fileAccess for review and submit
  const required = ["Comms Library", "Office Information"];
  const patchedFileAccess = Array.from(
    new Set([...(formData.fileAccess || []), ...required])
  );

  // Validation logic for required fields
  const isUserDetailsValid = !!(
    formData.forename &&
    formData.surname &&
    formData.department &&
    formData.jobTitle &&
    formData.startDate
  );

  const isHardwareValid = !!(
    formData.deviceType &&
    formData.laptopBag &&
    formData.headset
  );

  if (showSplash) return <SplashScreen />;

  return (
    <>
      <Navbar />
      <main
        className={`max-w-lg mx-auto p-6 transition-all duration-400 ${
          animating
            ? direction === "forward"
              ? "opacity-0 translate-x-10"
              : "opacity-0 -translate-x-10"
            : "opacity-100 translate-x-0"
        }`}
      >
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
          <ReviewAndSubmit formData={{ ...formData, fileAccess: patchedFileAccess }} />
        )}

        {/* Navigation buttons */}
        <div className="mt-4 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 rounded bg-[#9375B2] text-white font-semibold hover:bg-[#7a5e99] transition-colors"
            >
              Back
            </button>
          )}
          {step < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className={`px-4 py-2 rounded bg-[#9375B2] text-white font-semibold transition-colors ${
                (step === 1 && !isUserDetailsValid) ||
                (step === 2 && !isHardwareValid)
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#7a5e99]"
              }`}
              disabled={
                (step === 1 && !isUserDetailsValid) ||
                (step === 2 && !isHardwareValid)
              }
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 border rounded bg-[#95C7ED] text-white font-semibold hover:bg-[#7bbbe2] transition-colors"
            >
              Submit
            </button>
          )}
        </div>
      </main>
    </>
  );
}
