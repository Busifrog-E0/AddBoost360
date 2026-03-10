import { useState } from "react";
import { Save, ArrowLeft } from "lucide-react";
import usePostData from "../../hooks/api/usePostData";
import useUpdateData from "../../hooks/api/useUpdateData";
import ImageUploader from "../../components/ImageUploader";
import useHandleImageUpload from "../../hooks/handleImageUpload";

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
  const { updateLoading, updateData } = useUpdateData({});

  const { isLoading, postData } = usePostData({});
  const { handleImageUpload, isLoading: isImageUploading } =
    useHandleImageUpload();
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Title.trim()) newErrors.Title = "Title is required";
    if (!formData.ImageUrl) newErrors.ImageUrl = "Image is required";
    if (formData.Priority === "") {
      newErrors.Priority = "Priority is required";
    }

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
              Title *
            </label>
            <input
              type="text"
              value={formData.Title}
              onChange={(e) => handleInputChange("Title", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.Title ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Company Name"
            />
            {errors.Title && (
              <p className="text-sm text-red-600">{errors.Title}</p>
            )}
          </div>
          {/* Priority Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.Priority ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Order Priority"
            />
            {errors.Priority && (
              <p className="mt-1 text-sm text-red-600">{errors.Priority}</p>
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
              disabled={isLoading || isImageUploading || updateLoading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2 disabled:opacity-50"
            >
              {isLoading || isImageUploading || updateLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Company </span>
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
