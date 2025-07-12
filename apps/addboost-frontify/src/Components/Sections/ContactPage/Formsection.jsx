import React, { useState } from "react";
import Button from "../../Button";

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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = () => {
    // You can log or pass this formData anywhere
    console.log("Form submitted:", formData);
  };

  return (
    <div className="">
      <div className="flex flex-col gap-6 mt-10 text-white w-full max-w-xl">
        {/* Focus Area */}
        <div className="flex flex-col">
          <label className="text-sm mb-2">
            Choose Your Focus Area<span className="text-[#FF0004] ml-1">*</span>
          </label>
          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="p-3 bg-white border border-gray-600 rounded-md text-black outline-none"
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
        </div>

        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-sm mb-2">
            Full Name<span className="ml-1 text-[#FF0004]">*</span>
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your full name"
            className="p-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 outline-none"
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col">
          <label className="text-sm mb-2">
            Email Address<span className="ml-1 text-[#FF0004]">*</span>
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email address"
            className="p-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 outline-none"
          />
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

        {/* Business / Startup Name */}
        <div className="flex flex-col">
          <label className="text-sm mb-2">Business / Startup Name (if any)</label>
          <input
            name="startup"
            value={formData.startup}
            onChange={handleChange}
            type="text"
            placeholder="Enter your Business / Startup Name"
            className="p-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 outline-none"
          />
        </div>

        {/* Preferred Date & Time */}
        <div className="flex flex-col">
          <label className="text-sm mb-2">Preferred Date & Time</label>
          <input
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            type="datetime-local"
            className="p-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 outline-none"
          />
        </div>

        {/* Additional Notes */}
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

        <div className="mt-6 w-28">
          <Button onClick={handleSubmit} text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Formsection;
