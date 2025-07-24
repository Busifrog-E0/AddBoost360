import React, { useState } from "react";
import { Upload, X, Save, ArrowLeft } from "lucide-react";

const AddReview = ({
  onBack,
  onSave,
  title,
  description,
  isEditing = false,
  initialValue = {
    name: "",
    designation: "",
    successStories: "",
    image: null,
    imagePreview: "",
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

  const handleImageUpload = (e) => {
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

      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({
          ...prev,
          image: file,
          imagePreview: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: null, imagePreview: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.designation.trim())
      newErrors.designation = "Designation is required";
    if (!formData.successStories.trim())
      newErrors.successStories = "Review is required";
    if (!formData.imagePreview) newErrors.imagePreview = "Image is required";
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
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Customer name"
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Designation *
            </label>
            <input
              type="text"
              value={formData.designation}
              onChange={(e) => handleInputChange("designation", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.designation
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="e.g., CEO, Startup Inc."
            />
            {errors.designation && (
              <p className="text-sm text-red-600">{errors.designation}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Review *
            </label>
            <textarea
              value={formData.successStories}
              onChange={(e) =>
                handleInputChange("successStories", e.target.value)
              }
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg resize-none ${
                errors.successStories
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="Customer feedback or success story"
            />
            {errors.successStories && (
              <p className="text-sm text-red-600">{errors.successStories}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Image *
            </label>
            <div className="overflow-hidden w-[250px] h-[150px]">
              {!formData.imagePreview ? (
                <div
                  className={`border-2 border-dashed  p-6 text-center ${
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
                    <div className="flex flex-col items-center space-y-2">
                      <Upload className="w-6 h-6 text-gray-500" />
                      <p className="text-sm text-gray-700">Click to upload</p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG under 5MB
                      </p>
                    </div>
                  </label>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={formData.imagePreview}
                    alt="preview"
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

        <div className="flex justify-end bg-white border rounded-xl p-6">
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
                <span>Save Review</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
