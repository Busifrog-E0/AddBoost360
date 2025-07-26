import React, { useState } from "react";
import { Save, X, Upload, ArrowLeft, Trash2, Plus } from "lucide-react";
import ProjectPreviewCard from "./PortfolioPreviewCard";
import usePostData from "../../hooks/api/usePostData";
import useUpdateData from "../../hooks/api/useUpdateData";

const AddPortfolioPage = ({
  onBack,
  onSave,
  initialValue = {
    Title: "",
    ImpactPoints: [""],
    image: null,
    ImageUrl: "",
    ButtonMessage1: "",
    Type: "",
    Priority: "",
    LinkToProject: "",
  },
  title,
  description,
  isEditing = false,
}) => {
  const { isLoading, postData } = usePostData({});
  const { updateData } = useUpdateData({});
  const [formData, setFormData] = useState(initialValue);
  const [errors, setErrors] = useState({});

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
    if (!formData.Title.trim()) newErrors.Title = "Project name is required";
    if (!formData.ButtonMessage1.trim())
      newErrors.ButtonMessage1 = "Button text is required";
    if (!formData.Type.trim()) newErrors.Type = "Type is required";
    if (!formData.LinkToProject.trim())
      newErrors.LinkToProject = "Project Link is required";
    if (!formData.ImageUrl) newErrors.ImageUrl = "Project image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (fileUrl) => {
    const { image, ImageUrl, ...rest } = formData;
    const payload = { ...rest, ImageUrl: fileUrl };

    if (isEditing) {
      updateData({
        endpoint: `portfolios/${formData.DocId}`,
        payload: payload,
        onsuccess: (result) => {
          if (result) {
            onSave();
          }
        },
      });
    } else {
      postData({
        endpoint: "portfolios",
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
      <div className="grid lg:grid-cols-3 gap-3">
        <form onSubmit={handleSubmit} className="space-y-6  lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name *
              </label>
              <input
                Type="text"
                value={formData.Title}
                onChange={(e) => handleInputChange("Title", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.Title ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
                placeholder="e.g., E-commerce Platform"
              />
              {errors.Title && (
                <p className="text-sm text-red-600">{errors.title}</p>
              )}
            </div>
            {/* Priority */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority *
                </label>
                <input
                  type="number"
                  value={formData.Priority}
                  onChange={(e) =>
                    handleInputChange("Priority", Number(e.target.value))
                  }
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.title
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Order Priority"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>
            </div>

            {/* Button Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Call-to-Action Button Text *
              </label>
              <input
                Type="text"
                value={formData.ButtonMessage1}
                onChange={(e) =>
                  handleInputChange("ButtonMessage1", e.target.value)
                }
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.ButtonMessage1
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                }`}
                placeholder="e.g., View Website"
              />
              {errors.ButtonMessage1 && (
                <p className="text-sm text-red-600">{errors.ButtonMessage1}</p>
              )}
            </div>

            {/*Type*/}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type *
              </label>
              <input
                Type="text"
                value={formData.Type}
                onChange={(e) => handleInputChange("Type", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.Type ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
                placeholder="e.g., Website Design, Branding, Social Media Marketing"
              />
              {errors.Type && (
                <p className="text-sm text-red-600">{errors.Type}</p>
              )}
            </div>

            {/* Impact Points */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ImpactPoints
              </label>

              {formData.ImpactPoints.map((item, index) => (
                <input
                  key={index}
                  Type="text"
                  value={item}
                  onChange={(e) =>
                    handleListChange("ImpactPoints", index, e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
                  placeholder={`ImpactPoints ${index + 1}`}
                />
              ))}

              <div className="flex items-center space-x-2 mt-2">
                <button
                  Type="button"
                  onClick={() => addListItem("ImpactPoints")}
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Plus className="w-4 h-4 mr-1" /> Add Impact Point
                </button>

                {formData.ImpactPoints.length > 1 && (
                  <button
                    Type="button"
                    onClick={() =>
                      removeListItem(
                        "impactPoints",
                        formData.ImpactPoints.length - 1
                      )
                    }
                    className="flex items-center justify-center border border-red-500 text-red-500 rounded-md p-2 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            {/*LinkToProject */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Link *
              </label>
              <input
                Type="text"
                value={formData.LinkToProject}
                onChange={(e) =>
                  handleInputChange("LinkToProject", e.target.value)
                }
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.LinkToProject
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                }`}
                placeholder="e.g., https://google.com"
              />
              {errors.LinkToProject && (
                <p className="text-sm text-red-600">{errors.LinkToProject}</p>
              )}
            </div>
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Image *
              </label>
              <div className="overflow-hidden w-[250px] h-[200px]">
                {!formData.ImageUrl ? (
                  <div
                    className={`border-2 border-dashed p-6 text-center ${
                      errors.image
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      Type="file"
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
                      src={formData.ImageUrl}
                      alt="preview"
                      className="w-full h-48 object-cover rounded-lg border"
                    />
                    <button
                      Type="button"
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
          <div className="flex items-center justify-end space-x-4 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <button
              Type="button"
              onClick={onBack}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              Type="submit"
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
        <div className="">
          <ProjectPreviewCard project={formData} />
        </div>
      </div>
    </div>
  );
};

export default AddPortfolioPage;
