import React, { useState } from "react";
import Button from "../../Button";
import { useRef } from "react";

const Formsection = () => {
  const [formData, setFormData] = useState({
    area: "",
    name: "",
    email: "",
    phoneNumber: "",
    startup: "",
    comments: "",
    dateTime: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const areaRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error dynamically when field is filled
    if (value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.area.trim()) newErrors.area = "Please select a focus area";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";

    setErrors(newErrors);

    // Scroll to first invalid field
    const firstError = Object.keys(newErrors)[0];
    if (firstError === "area")
      areaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (firstError === "name")
      nameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (firstError === "email")
      emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setShowPopup(true);
    }
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="relative">
      <div className="flex flex-col gap-6 mt-10 text-white w-full max-w-xl">
        {/* Focus Area */}
        <div className="flex flex-col" ref={areaRef}>
          <label className="text-sm mb-2">
            Choose Your Focus Area<span className="text-[#FF0004] ml-1">*</span>
          </label>
          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            className={`p-3 border rounded-md outline-none ${errors.area
              ? "border-red-500 bg-red-50 text-black"
              : "border-gray-600 bg-white text-black"
              }`}
          >
            <option value="">-- Select an option --</option>
            <option>Digital Marketing Strategy</option>
            <option>Branding & Logo Identity</option>
            <option>Website or E-Commerce Development</option>
            <option>Startup Launch & Product Sourcing</option>
            <option>AI Tools & Automation</option>
            <option>Training or Empowerment Program</option>
            <option>Something Else</option>
          </select>
          {errors.area && (
            <span className="text-sm text-red-500 mt-1">{errors.area}</span>
          )}
        </div>

        {/* Full Name */}
        <div className="flex flex-col" ref={nameRef}>
          <label className="text-sm mb-2">
            Full Name<span className="ml-1 text-[#FF0004]">*</span>
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your full name"
            className={`p-3 border rounded-md outline-none ${errors.name
              ? "border-red-500 bg-red-50 text-black"
              : "border-gray-600 bg-white text-black"
              }`}
          />
          {errors.name && (
            <span className="text-sm text-red-500 mt-1">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col" ref={emailRef}>
          <label className="text-sm mb-2">
            Email Address<span className="ml-1 text-[#FF0004]">*</span>
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email address"
            className={`p-3 border rounded-md outline-none ${errors.email
              ? "border-red-500 bg-red-50 text-black"
              : "border-gray-600 bg-white text-black"
              }`}
          />
          {errors.email && (
            <span className="text-sm text-red-500 mt-1">{errors.email}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-sm mb-2">Phone Number</label>
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            type="tel"
            placeholder="Enter your phone number"
            className="p-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 outline-none"
          />
        </div>

        {/* Startup Name */}
        <div className="flex flex-col">
          <label className="text-sm mb-2">
            Business / Startup Name (if any)
          </label>
          <input
            name="startup"
            value={formData.startup}
            onChange={handleChange}
            type="text"
            placeholder="Enter your Business / Startup Name"
            className="p-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 outline-none"
          />
        </div>

        {/* Date & Time */}
        <div className="flex flex-col">
          <label className="text-sm mb-2">Preferred Date & Time</label>
          <input
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            type="datetime-local"
            className="p-3 bg-white border border-gray-600 rounded-md text-black outline-none"
          />
        </div>

        {/* Comments */}
        <div className="flex flex-col">
          <label className="text-sm mb-2">Additional Notes or Questions</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
            placeholder="Enter your comments"
            className="p-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 w-28">
          <Button onClick={handleSubmit} text="Submit" />
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-sm text-center animate-fade-in">
            {/* <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" /> */}
            <h2 className="text-lg font-semibold text-gray-800">Thank you!</h2>
            <p className="text-sm text-gray-600 mt-2">
              Your submission has been received. Our team will get back to you
              shortly.
            </p>
            <button
              onClick={closePopup}
              className="mt-6 w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formsection;
