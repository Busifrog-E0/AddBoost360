import React, { useState } from "react";
import { Save, X, Upload, ArrowLeft, Trash2, Plus } from "lucide-react";
import ServicePreviewCard from "./ServicePreviewCard";

const AddServicePage = ({
  onBack,
  onSave,
  title,
  description,
  isEditing = false,
  initialValue = {
    title: "",
    subtitle: "",
    description: "",
    buttonText: "",

    image: null,
    imagePreview: "",
    services: [""],
  },
}) => {
  const [formData, setFormData] = useState(initialValue);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleServiceChange = (index, value) => {
    const newServices = [...formData.services];
    newServices[index] = value;
    setFormData((prev) => ({ ...prev, services: newServices }));
  };

  const addService = () => {
    setFormData((prev) => ({
      ...prev,
      services: [...prev.services, ""],
    }));
  };

  const removeService = (index) => {
    const newServices = formData.services.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, services: newServices }));
  };

  const handleImageUpload = (e) => {
    console.log(e);
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          image: "Please select a valid image file",
        }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: "Image size should be less than 5MB",
        }));
        return;
      }
      setFormData((prev) => ({ ...prev, image: file }));

      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          imagePreview: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
      setErrors((prev) => {
        console.log(prev);
        return { ...prev, imagePreview: "" };
      });
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: null, imagePreview: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.subtitle.trim()) newErrors.subtitle = "Subtitle is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";

    if (!formData.buttonText.trim())
      newErrors.buttonText = "Button text is required";
    if (!formData.imagePreview)
      newErrors.imagePreview = "Service image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      onSave(formData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
        </div>
      </div>

      {/* Form */}

      <div className="grid lg:grid-cols-3 gap-3">
        <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Service Information
            </h2>

            {/* Title */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.title
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="e.g., Web Development"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Description *
                </label>
                <textarea
                  rows={6}
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  className={`w-full px-4 py-3 border rounded-lg resize-none ${
                    errors.description
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Detailed description..."
                />

                {errors.description && (
                  <p className="text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              {/* Subtitle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Subtitle *
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) =>
                    handleInputChange("subtitle", e.target.value)
                  }
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.subtitle
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="e.g., Modern Web Apps"
                />
                {errors.subtitle && (
                  <p className="mt-1 text-sm text-red-600">{errors.subtitle}</p>
                )}
              </div>

              {/* Services List */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  List of Services
                </label>

                {formData.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={service}
                      onChange={(e) =>
                        handleServiceChange(index, e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder={`Service ${index + 1}`}
                    />
                  </div>
                ))}

                <div className="flex items-center space-x-2 mt-2">
                  <button
                    type="button"
                    onClick={addService}
                    className="flex items-center mt-2 text-blue-600 hover:underline"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add New Service
                  </button>

                  {formData.services.length > 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        removeService(formData.services.length - 1)
                      }
                      className="flex items-center justify-center border border-red-500 text-red-500 rounded-md p-2 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Button Text */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Call-to-Action Button Text *
                </label>
                <input
                  type="text"
                  value={formData.buttonText}
                  onChange={(e) =>
                    handleInputChange("buttonText", e.target.value)
                  }
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.buttonText
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="e.g., Contact Us"
                />
                {errors.buttonText && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.buttonText}
                  </p>
                )}
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Image *
                </label>
                <div className="overflow-hidden w-[250px] h-[200px]">
                  {!formData.imagePreview ? (
                    <div
                      className={`border-2 border-dashed p-8 text-center ${
                        errors.imagePreview
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="p-3 bg-gray-100 rounded-full">
                            <Upload className="w-6 h-6 text-gray-600" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            Click to upload image
                          </p>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 5MB
                          </p>
                        </div>
                      </label>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={formData.imagePreview}
                        alt="Service preview"
                        className="w-full h-48 object-cover rounded-lg border"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {errors.imagePreview && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.imagePreview}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-end space-x-4 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Service</span>
                </>
              )}
            </button>
          </div>
        </form>
        <div className="">
          <ServicePreviewCard service={formData} />
        </div>
      </div>
    </div>
  );
};

export default AddServicePage;
