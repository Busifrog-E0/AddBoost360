import React, { useState, useRef, useEffect } from "react";
import Button from "../../Button";
import usePostData from "../../../hooks/api/usePostData";

const Formsection = () => {
  const initialValue = {
    FocusArea: "",
    FullName: "",
    Email: "",
    Phone: "",
    BusinessName: "",
    Notes: "",
    PreferredDate: new Date().getTime(),
  }
  const [formData, setFormData] = useState(initialValue);
  const { isLoading, postData } = usePostData({});
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const areaRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const popupRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const transformedValue =
      name === "PreferredDate" ? new Date(value).getTime() : value;

    setFormData((prev) => ({
      ...prev,
      [name]: transformedValue,
    }));

    // if (transformedValue.trim() !== "") {
    //   setErrors((prev) => ({
    //     ...prev,
    //     [name]: "",
    //   }));
    // }
  };

  const handleSubmit = () => {
    postData({
      endpoint: "forms",
      payload: formData,
      onsuccess: (result) => {
        setShowPopup(true);
        setFormData(initialValue)
      },
    });

    const newErrors = {};

    if (!formData.FocusArea.trim())
      newErrors.FocusArea = "Please select a focus FocusArea";
    if (!formData.FullName.trim()) newErrors.FullName = "Name is required";
    if (!formData.Email.trim()) newErrors.Email = "Email is required";

    setErrors(newErrors);

    const firstError = Object.keys(newErrors)[0];
    if (firstError === "FocusArea")
      areaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (firstError === "FullName")
      nameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (firstError === "Email")
      emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);

    }
  };

  const closePopup = () => setShowPopup(false);

  const toLocalDateTimeInputValue = (date) => {
    const local = new Date(date);
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toISOString().slice(0, 16);
  };

  // ✅ Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="relative">
      <div className="flex flex-col gap-6 mt-10 text-white w-full max-w-xl">
        {/* Focus Area */}
        <div className="flex flex-col" ref={areaRef}>
          <label className="text-sm mb-2">
            Choose Your Focus Area<span className="text-[#FF0004] ml-1">*</span>
          </label>
          <select
            name="FocusArea"
            value={formData.FocusArea}
            onChange={handleChange}
            className={`p-3 border rounded-md outline-none w-full ${errors.FocusArea
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
          {errors.FocusArea && (
            <span className="text-sm text-red-500 mt-1">
              {errors.FocusArea}
            </span>
          )}
        </div>

        {/* Full Name */}
        <div className="flex flex-col" ref={nameRef}>
          <label className="text-sm mb-2">
            Full Name<span className="ml-1 text-[#FF0004]">*</span>
          </label>
          <input
            name="FullName"
            value={formData.FullName}
            onChange={handleChange}
            type="text"
            placeholder="Enter your full FullName"
            className={`p-3 border rounded-md outline-none ${errors.FullName
              ? "border-red-500 bg-red-50 text-black"
              : "border-gray-600 bg-white text-black"
              }`}
          />
          {errors.FullName && (
            <span className="text-sm text-red-500 mt-1">{errors.FullName}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col" ref={emailRef}>
          <label className="text-sm mb-2">
            Email Address<span className="ml-1 text-[#FF0004]">*</span>
          </label>
          <input
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            type="Email"
            placeholder="Enter your Email address"
            className={`p-3 border rounded-md outline-none ${errors.Email
              ? "border-red-500 bg-red-50 text-black"
              : "border-gray-600 bg-white text-black"
              }`}
          />
          {errors.Email && (
            <span className="text-sm text-red-500 mt-1">{errors.Email}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-sm mb-2">Phone Number</label>
          <input
            name="Phone"
            value={formData.Phone}
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
            name="BusinessName"
            value={formData.BusinessName}
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
            name="PreferredDate"
            value={toLocalDateTimeInputValue(formData.PreferredDate)}
            onChange={handleChange}
            type="datetime-local"
            className="p-3 bg-white border border-gray-600 rounded-md text-black outline-none w-full"
          />
        </div>

        {/* Comments */}
        <div className="flex flex-col">
          <label className="text-sm mb-2">Additional Notes or Questions</label>
          <textarea
            name="Notes"
            value={formData.Notes}
            onChange={handleChange}
            rows={4}
            placeholder="Enter your Notes"
            className="p-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 w-full">
          <Button onClick={handleSubmit} text="Submit" />
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div
            ref={popupRef}
            className="relative bg-white rounded-md shadow-xl p-6 md:p-8 w-full max-w-sm text-center animate-fade-in"
          >
            {/* Close Icon */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
            >
              &times;
            </button>

            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-xl mt-4 font-semibold text-gray-800 font-anton">
              Thank you!
            </h2>
            <p className="text-sm text-gray-600 mt-4 font-inter">
              Your submission has been received. Our team will get back to you
              shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formsection;
