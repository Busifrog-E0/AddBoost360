import React, { useState } from "react";
import { Save, X, Upload, ArrowLeft, Trash2, Plus } from "lucide-react";

const AddPortfolioPage = ({ onBack, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
    image: null,
    imagePreview: "",
    successStories: [""],
    impact: [""],
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleListChange = (field, index, value) => {
    const updatedList = [...formData[field]];
    updatedList[index] = value;
    setFormData((prev) => ({ ...prev, [field]: updatedList }));
  };

  const addListItem = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeListItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
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
    if (!formData.title.trim()) newErrors.title = "Project name is required";
    if (!formData.subtitle.trim()) newErrors.subtitle = "Subtitle is required";
    if (!formData.buttonText.trim())
      newErrors.buttonText = "Button text is required";
    if (!formData.image) newErrors.image = "Project image is required";
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
            <h1 className="text-2xl font-bold text-gray-900">
              Add New Portfolio Project
            </h1>
            <p className="text-gray-600 mt-1">
              Add details of your project portfolio
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Name *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.title ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="e.g., E-commerce Platform"
            />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          {/* Subtitle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subtitle *
            </label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => handleInputChange("subtitle", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.subtitle ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="e.g., Innovative Design for Client X"
            />
            {errors.subtitle && (
              <p className="text-sm text-red-600">{errors.subtitle}</p>
            )}
          </div>

          {/* Button Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Call-to-Action Button Text *
            </label>
            <input
              type="text"
              value={formData.buttonText}
              onChange={(e) => handleInputChange("buttonText", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.buttonText
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="e.g., View Project"
            />
            {errors.buttonText && (
              <p className="text-sm text-red-600">{errors.buttonText}</p>
            )}
          </div>

          {/* Success Stories */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Success Stories
            </label>
            {formData.successStories.map((story, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={story}
                  onChange={(e) =>
                    handleListChange("successStories", index, e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder={`Story ${index + 1}`}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addListItem("successStories")}
              className="flex items-center text-blue-600 hover:underline mt-2"
            >
              <Plus className="w-4 h-4 mr-1" /> Add Success Story
            </button>
          </div>

          {/* Impact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Impact
            </label>
            {formData.impact.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) =>
                    handleListChange("impact", index, e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder={`Impact ${index + 1}`}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addListItem("impact")}
              className="flex items-center text-blue-600 hover:underline mt-2"
            >
              <Plus className="w-4 h-4 mr-1" /> Add Impact Point
            </button>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Image *
            </label>
            {!formData.imagePreview ? (
              <div
                className={`border-2 border-dashed p-6 text-center ${
                  errors.image ? "border-red-300 bg-red-50" : "border-gray-300"
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
                    <p className="text-xs text-gray-500">PNG, JPG under 5MB</p>
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
            {errors.image && (
              <p className="text-sm text-red-600 mt-1">{errors.image}</p>
            )}
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
                <span>Save Project</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPortfolioPage;
