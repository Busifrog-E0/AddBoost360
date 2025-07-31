import React, { useState } from "react";
import { Upload, X, Save, ArrowLeft } from "lucide-react";
import usePostData from "../../hooks/api/usePostData";
import useUpdateData from "../../hooks/api/useUpdateData";

const AddCompanyLogo = ({
  onBack,
  onSave,
  title,
  description,
  isEditing = false,
  initialValue = {
    Title: "",
    Priority: 5,
    image: null,
    ImageUrl: "",
  },
}) => {
  const [formData, setFormData] = useState(initialValue);
  const { updateData } = useUpdateData({});
  const { isLoading, postData } = usePostData({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

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
    reader.onload = (loadEvent) => {
      const arrayBuffer = loadEvent.target.result;
      const byteArray = Array.from(new Uint8Array(arrayBuffer));
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

    reader.onerror = () => {
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
    if (!formData.Title.trim()) newErrors.Title = "Title is required";
    if (!formData.ImageUrl) newErrors.ImageUrl = "Image is required";
    if (!formData.Priority) newErrors.Priority = "Priority is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (fileUrl) => {
    const { image, ImageUrl, ...rest } = formData;
    const payload = { ...rest, ImageUrl: fileUrl };

    if (isEditing) {
      updateData({
        endpoint: `companyLogos/${formData.DocId}`,
        payload: payload,
        onsuccess: (result) => {
          if (result) onSave();
        },
      });
    } else {
      postData({
        endpoint: "companyLogos",
        payload: payload,
        onsuccess: (result) => {
          if (result) onSave();
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
              Title *
            </label>
            <input
              type="text"
              value={formData.Title}
              onChange={(e) => handleInputChange("Title", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg ${errors.Title ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              placeholder="Company Name"
            />
            {errors.Title && (
              <p className="text-sm text-red-600">{errors.Title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            {errors.Priority && (
              <p className="text-sm text-red-600">{errors.Priority}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Logo *
            </label>
            <div className="overflow-hidden w-[250px] aspect-video">
              {!formData.ImageUrl ? (
                <div
                  className={`border-2 border-dashed p-8 text-center rounded-lg w-full h-full ${errors.ImageUrl
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                    }`}
                >
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .webp"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer ">
                    <div className="flex flex-col items-center space-y-2 h-full justify-center">
                      <div className="p-3 bg-gray-100 rounded-full">
                        <Upload className="w-6 h-6 text-gray-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-900 ">
                        Click to upload image
                      </p>
                      <p className="text-xs text-gray-500">
                        JPG or WEBP • Max 2MB • 16:9 aspect ratio
                      </p>
                    </div>
                  </label>
                </div>
              ) : (
                <div className="relative w-full aspect-video rounded-lg">
                  <img
                    src={formData.ImageUrl}
                    alt="Team member preview"
                    className="w-full h-full object-cover rounded-lg border"
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
            </div>
          </div>
        </div>

        <div className="flex justify-end bg-white border rounded-xl p-6">
          {/* Footer Buttons */}
          <div className="flex items-center justify-end space-x-4 ">
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
                  <span>Save Company logo </span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCompanyLogo;
