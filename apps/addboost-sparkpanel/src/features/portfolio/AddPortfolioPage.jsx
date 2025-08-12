import React, { useState } from "react";
import { Save, X, Upload, ArrowLeft, Trash2, Plus } from "lucide-react";
import ProjectPreviewCard from "./PortfolioPreviewCard";
import usePostData from "../../hooks/api/usePostData";
import useUpdateData from "../../hooks/api/useUpdateData";
import ImageUploader from "../../components/ImageUploader";
import useHandleImageUpload from "../../hooks/handleImageUpload";

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
    Priority: 5,
    LinkToProject: "",
  },
  title,
  description,
  isEditing = false,
}) => {
  const { isLoading, postData } = usePostData({});
  const { isLoadingMore, updateData } = useUpdateData({});
  const { handleImageUpload, isLoading: isImageUploading } =
    useHandleImageUpload();
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

    // Clear the error if present

    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
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

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Other field validations...
    if (!formData.Title.trim()) {
      newErrors.Title = "Project name is required";
      isValid = false;
    }

    if (formData.Priority === "") {
      newErrors.Priority = "Priority is required";
    }

    if (!formData.ButtonMessage1.trim()) {
      newErrors.ButtonMessage1 = "Button text is required";
      isValid = false;
    }

    if (!formData.Type.trim()) {
      newErrors.Type = "Type is required";
      isValid = false;
    }

    // ✅ Validate ImpactPoints
    const impactPointErrors = formData.ImpactPoints.map((point) =>
      !point.trim() ? "This field is required" : ""
    );
    if (impactPointErrors.some((msg) => msg !== "")) {
      newErrors.ImpactPoints = impactPointErrors;
      isValid = false;
    }

    // Validate project link
    // if (!formData.LinkToProject.trim()) {
    //   newErrors.LinkToProject = "Project Link is required";
    //   isValid = false;
    // }

    // Validate image
    if (!formData.ImageUrl) {
      newErrors.ImageUrl = "Project image is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
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
                type="text"
                value={formData.Title}
                onChange={(e) => handleInputChange("Title", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.Title ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
                placeholder="e.g., E-commerce Platform"
              />
              {errors.Title && (
                <p className="text-sm text-red-600">{errors.Title}</p>
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
                  value={formData.Priority ?? ""}
                  onChange={(e) =>
                    handleInputChange(
                      "Priority",
                      e.target.value === "" ? "" : Number(e.target.value)
                    )
                  }
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.Priority
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

            {/* Button Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Call-to-Action Button Text *
              </label>
              <input
                type="text"
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

            {/* Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type *
              </label>
              <input
                type="text"
                value={formData.Type}
                onChange={(e) => handleInputChange("Type", e.target.value)}
                className={`w-full px-4  py-3 border rounded-lg ${
                  errors.Type ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
                placeholder="e.g., Website Design, Branding, Social Media Marketing"
              />
              {errors.Type && (
                <p className=" text-sm text-red-600">{errors.Type}</p>
              )}
            </div>

            {/* Impact Points */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Impact Points*
              </label>

              {formData.ImpactPoints.map((item, index) => (
                <div key={index} className="flex items-start space-x-2 mb-2">
                  <div className="w-full">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) =>
                        handleListChange("ImpactPoints", index, e.target.value)
                      }
                      className={`w-full px-4 py-3 border rounded-lg ${
                        errors.ImpactPoints?.[index]
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      }`}
                      placeholder={`Impact Point ${index + 1}`}
                    />
                    {errors.ImpactPoints?.[index] && (
                      <p className="text-sm text-red-600">
                        {errors.ImpactPoints[index]}
                      </p>
                    )}
                  </div>

                  {formData.ImpactPoints.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeListItem("ImpactPoints", index)}
                      className="text-red-500  mt-4"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}

              <div className="flex items-center space-x-2 mt-2">
                <button
                  type="button"
                  onClick={() => addListItem("ImpactPoints")}
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Plus className="w-4 h-4 mr-1" /> Add Impact Point
                </button>
              </div>
            </div>

            {/*LinkToProject */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Link
              </label>
              <input
                type="text"
                value={formData.LinkToProject}
                onChange={(e) =>
                  handleInputChange("LinkToProject", e.target.value)
                }
                className="w-full px-4 py-3 border rounded-lg border-gray-300"
                placeholder="e.g., https://google.com"
              />
            </div>

            {/* Image Upload */}
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
              disabled={isLoading || isLoadingMore}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2 disabled:opacity-50"
            >
              {isLoading || isLoadingMore ? (
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
