import React, { useState } from "react";
import { Upload, X, Save, ArrowLeft } from "lucide-react";
import usePostData from "../../hooks/api/usePostData";
import useUpdateData from "../../hooks/api/useUpdateData";
import useHandleImageUpload from "../../hooks/handleImageUpload";
import ImageUploader from "../../components/ImageUploader";

const AddReview = ({
  onBack,
  onSave,
  title,
  description,
  isEditing = false,
  initialValue = {
    Title: "",
    Priority: 5,
    Designation: "",
    Description1: "",
    image: null,
    ImageUrl: "",
  },
}) => {
  const [formData, setFormData] = useState(initialValue);
  const { updateData } = useUpdateData({});
  const { handleImageUpload, isLoading: isImageUploading } = useHandleImageUpload();

  const { isLoading, postData } = usePostData({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Title.trim()) newErrors.Title = "Name is required";
    if (!formData.Designation.trim())
      newErrors.Designation = "Designation is required";
    if (formData.Priority === "") {
      newErrors.Priority = "Priority is required";
    }

    if (!formData.Description1.trim())
      newErrors.Description1 = "Review is required";
    if (!formData.ImageUrl) newErrors.ImageUrl = "Customer Image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (fileUrl) => {
    const { image, ImageUrl, ...rest } = formData;
    const payload = { ...rest, ImageUrl: fileUrl };

    if (isEditing) {
      updateData({
        endpoint: `testimonialss/${formData.DocId}`,
        payload: payload,
        onsuccess: (result) => {
          if (result) {
            onSave();
          }
        },
      });
    } else {
      postData({
        endpoint: "testimonialss",
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

    handleImageUpload(
      formData,
      (fileUrl) => handleFormSubmit(fileUrl),
      (errorMsg) => {
        setErrors((prev) => ({ ...prev, ImageUrl: errorMsg }));
      }
    );
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
              Customer Title / Company Name *
            </label>
            <input
              type="text"
              value={formData.Title}
              onChange={(e) => handleInputChange("Title", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg ${errors.Title ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              placeholder="Customer Title / Company Name"
            />
            {errors.Title && (
              <p className="text-sm text-red-600">{errors.Title}</p>
            )}
          </div>

          {/* Priority */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority *
              </label>
              <input
                type="number"
                value={formData.Priority ?? ""}
                onChange={(e) =>
                  handleInputChange(
                    "Priority",
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
                className={`w-full px-4 py-3 border rounded-lg ${errors.Priority
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
                  }`}
                placeholder="Order Priority"
              />
              {errors.Priority && (
                <p className="mt-1 text-sm text-red-600">{errors.Priority}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Designation / Location *
            </label>
            <input
              type="text"
              value={formData.Designation}
              onChange={(e) => handleInputChange("Designation", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg ${errors.Designation
                ? "border-red-300 bg-red-50"
                : "border-gray-300"
                }`}
              placeholder="Designation / Location"
            />
            {errors.Designation && (
              <p className="text-sm text-red-600">{errors.Designation}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Review *
            </label>
            <textarea
              value={formData.Description1}
              onChange={(e) =>
                handleInputChange("Description1", e.target.value)
              }
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg resize-none ${errors.Description1
                ? "border-red-300 bg-red-50"
                : "border-gray-300"
                }`}
              placeholder="Customer feedback or success story"
            />
            {errors.Description1 && (
              <p className="text-sm text-red-600">{errors.Description1}</p>
            )}
          </div>

          <div>
            <ImageUploader
              value={{ ImageUrl: formData.ImageUrl }}
              error={errors.ImageUrl}
              onChange={(imageData, errorMsg) => {
                if (errorMsg) {
                  setErrors((prev) => ({ ...prev, ImageUrl: errorMsg }));
                } else {
                  setFormData((prev) => ({
                    ...prev,
                    image: imageData,
                    ImageUrl: imageData?.ImageUrl || "",
                  }));
                  setErrors((prev) => ({ ...prev, ImageUrl: "" }));
                }
              }}
            />
          </div>
        </div>

        <div className="flex justify-end bg-white border rounded-xl p-6 space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading || isImageUploading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2 disabled:opacity-50"
          >
            {isLoading || isImageUploading ? (
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
