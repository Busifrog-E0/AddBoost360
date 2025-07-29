import React, { useState } from "react";
import { Save, X, Upload, ArrowLeft, Plus, Trash2 } from "lucide-react";
import usePostData from "../../hooks/api/usePostData";
import useUpdateData from "../../hooks/api/useUpdateData";

const AddCompanyPage = ({
  onBack,
  onSave,
  title,
  description,
  isEditing = false,
  initialValue = {
    Title: "",
    Tags: [""],
    Country: "",
    State: "",
    image: null,
    ImageUrl: "",
    Priority: 5,
  },
}) => {
  const [formData, setFormData] = useState(initialValue);

  const [errors, setErrors] = useState({});
  const { isLoading, postData } = usePostData({});
  const { updateData } = useUpdateData({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ——— Validate type & size ———
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

    // ——— Read as ArrayBuffer ———
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const arrayBuffer = loadEvent.target.result; // true ArrayBuffer
      const byteArray = Array.from(new Uint8Array(arrayBuffer));

      // Create a blob URL for preview
      const previewUrl = URL.createObjectURL(file);

      setFormData((prev) => ({
        ...prev,
        ImageUrl: previewUrl,
        image: {
          FileType: file.type,
          FileData: byteArray,
          FileName: file.name,
        },
      }));
      setErrors((prev) => ({
        ...prev,
        image: "",
        ImageUrl: "",
      }));
    };

    reader.onerror = (err) => {
      console.error("FileReader error:", err);
      setErrors((prev) => ({
        ...prev,
        image: "Failed to read file. Please try again.",
      }));
    };

    reader.readAsArrayBuffer(file);
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: null, ImageUrl: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Title.trim()) newErrors.title = "Company name is required";
    if (
      !formData.Tags.length ||
      formData.Tags.every((cat) => cat.trim() === "")
    )
      newErrors.Tags = "Product categories are required";
    if (!formData.Country.trim()) newErrors.Country = "Country is required";
    if (!formData.State.trim()) newErrors.State = "State is required";
    if (!formData.ImageUrl) newErrors.ImageUrl = "Company image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (fileUrl) => {
    const { image, ImageUrl, ...rest } = formData;
    const payload = { ...rest, ImageUrl: fileUrl };

    if (isEditing) {
      updateData({
        endpoint: `organizations/${formData.DocId}`,
        payload: payload,
        onsuccess: (result) => {
          if (result) {
            onSave();
          }
        },
      });
    } else {
      postData({
        endpoint: "organizations",
        payload: payload,
        onsuccess: (result) => {
          if (result) {
            onSave();
          }
        },
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (formData.image) {
      postData({
        endpoint: "files/admin",
        payload: formData.image,
        onsuccess: (result) => {
          handleFormSubmit(result.FileUrl);
        },
      });
    } else {
      handleFormSubmit(formData.ImageUrl);
    }
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              value={formData.Title}
              onChange={(e) => handleInputChange("Title", e.target.value)}
              className={`w-full px-4 py-3 border mb-3 rounded-lg ${errors.title ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              placeholder="e.g., Razorpay"
            />
            {errors.title && (
              <p className="text-sm text-red-600 mb-2 ">{errors.title}</p>
            )}
          </div>

          {/* Priority */}
          <div className="space-y-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority *
              </label>
              <input
                type="number"
                value={formData.Priority ?? ""}
                onChange={(e) =>
                  handleInputChange("Priority", e.target.value === "" ? "" : Number(e.target.value))
                }
                className={`w-full px-4 py-3 border rounded-lg ${errors.Priority ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                placeholder="Order Priority"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>
          </div>

          {/* Product Categories */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Categories *
            </label>

            {formData.Tags.map((category, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={category}
                  onChange={(e) => {
                    const updated = [...formData.Tags];
                    updated[index] = e.target.value;
                    handleInputChange("Tags", updated);
                  }}
                  className={`w-full px-4 mb-2 py-3 border rounded-lg ${errors.Tags ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                  placeholder={`Category ${index + 1}`}
                />
              </div>
            ))}

            <div className="flex items-center space-x-2 mt-2">
              <button
                type="button"
                onClick={() =>
                  handleInputChange("Tags", [...formData.Tags, ""])
                }
                className="flex items-center mt-1  mb-2 text-blue-600 hover:underline"
              >
                <Plus className="w-4 h-4 mr-1 " /> Add New Category
              </button>

              {formData.Tags.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const updated = [...formData.Tags];
                    updated.pop();
                    handleInputChange("Tags", updated);
                  }}
                  className="flex items-center justify-center border border-red-500 text-red-500  rounded-md p-2   hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            {errors.Tags && (
              <p className="text-sm text-red-600 mb-2">{errors.Tags}</p>
            )}
          </div>
          {/*State */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State *
            </label>
            <input
              type="text"
              value={formData.State}
              onChange={(e) => handleInputChange("State", e.target.value)}
              className={`w-full px-4 py-3 border mb-2 rounded-lg ${errors.State ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              placeholder="e.g., India"
            />
            {errors.State && (
              <p className="text-sm text-red-600 mb-2">{errors.State}</p>
            )}
          </div>
          {/* Country */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country *
            </label>
            <input
              type="text"
              value={formData.Country}
              onChange={(e) => handleInputChange("Country", e.target.value)}
              className={`w-full px-4 py-3 border mb-2 rounded-lg ${errors.Country ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              placeholder="e.g., India"
            />
            {errors.Country && (
              <p className="text-sm text-red-600 mb-2">{errors.Country}</p>
            )}
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Image *
            </label>
            <div className="overflow-hidden w-[250px] h-[200px]">
              {!formData.ImageUrl ? (
                <div
                  className={`border-2 border-dashed p-8 text-center ${errors.image
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
                    src={formData.ImageUrl}
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
              {errors.ImageUrl && (
                <p className="text-sm text-red-600 mt-1">{errors.ImageUrl}</p>
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
