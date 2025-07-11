import React, { useState } from "react";
import { Save, X, Upload, ArrowLeft, Plus, Trash2 } from "lucide-react";

const AddCompanyPage = ({
  onBack,
  onSave,
  title,
  description,
  isEditing = false,
  initialValue = {
    title: "",
    productCategories: [""],
    country: "",
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
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          image: file,
          imagePreview: e.target.result,
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
    if (!formData.title.trim()) newErrors.title = "Company name is required";
    if (
      !formData.productCategories.length ||
      formData.productCategories.every((cat) => cat.trim() === "")
    )
      newErrors.productCategories = "Product categories are required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.imagePreview)
      newErrors.imagePreview = "Company image is required";
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
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Company Information
          </h2>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className={`w-full px-4 py-3 border mb-3 rounded-lg ${
                errors.title ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="e.g., Razorpay"
            />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          {/* Product Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Categories *
            </label>

            {formData.productCategories.map((category, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={category}
                  onChange={(e) => {
                    const updated = [...formData.productCategories];
                    updated[index] = e.target.value;
                    handleInputChange("productCategories", updated);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder={`Category ${index + 1}`}
                />
              </div>
            ))}

            <div className="flex items-center space-x-2 mt-2">
              <button
                type="button"
                onClick={() =>
                  handleInputChange("productCategories", [
                    ...formData.productCategories,
                    "",
                  ])
                }
                className="flex items-center mt-1  mb-2 text-blue-600 hover:underline"
              >
                <Plus className="w-4 h-4 mr-1 " /> Add New Category
              </button>

              {formData.productCategories.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const updated = [...formData.productCategories];
                    updated.pop();
                    handleInputChange("productCategories", updated);
                  }}
                  className="flex items-center justify-center border border-red-500 text-red-500 rounded-md p-2 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            {errors.productCategories && (
              <p className="text-sm text-red-600 mt-1">
                {errors.productCategories}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country *
            </label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              className={`w-full px-4 py-3 border mb-3 rounded-lg ${
                errors.country ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="e.g., India"
            />
            {errors.country && (
              <p className="text-sm text-red-600">{errors.country}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Image *
            </label>
            <div className="overflow-hidden w-[250px] h-[180px]">
              {!formData.imagePreview ? (
                <div
                  className={`border-2 border-dashed p-8 text-center ${
                    errors.image
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
                    alt="Company preview"
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

        {/* Footer Buttons */}
        <div className="flex items-center justify-end space-x-4 bg-white rounded-xl shadow-sm border p-6">
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
                <span>Save Company</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCompanyPage;
