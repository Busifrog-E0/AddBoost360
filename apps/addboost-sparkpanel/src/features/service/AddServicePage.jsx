import React, { useState } from "react";
import { Save, X, Upload, ArrowLeft, Trash2, Plus } from "lucide-react";
import ServicePreviewCard from "./ServicePreviewCard";
import usePostData from "../../hooks/api/usePostData";
import useUpdateData from "../../hooks/api/useUpdateData";

const AddServicePage = ({
  onBack,
  onSave,
  title,
  description,
  isEditing = false,
  initialValue = {
    Title: "",
    Type: "",
    Priority: 5,
    Description1: "",
    Description2: "",
    ButtonMessage1: "",
    images: [],
    ImageUrl: [],
    ServiceList: [""],
  },
}) => {
  const { isLoading, postData } = usePostData({});
  const { updateData } = useUpdateData({});

  const [formData, setFormData] = useState(() => ({
    ...initialValue,
    images: [],
    ImageUrl: Array.isArray(initialValue.ImageUrl)
      ? [...initialValue.ImageUrl]
      : [],
  }));

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleServiceChange = (index, value) => {
    const newServices = [...formData.ServiceList];
    newServices[index] = value;
    setFormData((prev) => ({ ...prev, ServiceList: newServices }));
  };

  const addService = () => {
    setFormData((prev) => ({
      ...prev,
      ServiceList: [...prev.ServiceList, ""],
    }));
  };

  const removeService = (index) => {
    setFormData((prev) => ({
      ...prev,
      ServiceList: prev.ServiceList.filter((_, i) => i !== index),
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    const newImages = [];

    files.forEach((file) => {
      if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024)
        return;

      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const arrayBuffer = loadEvent.target.result;
        const byteArray = Array.from(new Uint8Array(arrayBuffer));
        const previewUrl = URL.createObjectURL(file);

        setFormData((prev) => ({
          ...prev,
          ImageUrl: [...prev.ImageUrl],
          images: [
            ...prev.images,
            {
              FileType: file.type,
              FileData: byteArray,
              FileName: file.name,
            },
          ],
        }));
      };

      reader.readAsArrayBuffer(file);
    });

    setErrors((prev) => ({ ...prev, ImageUrl: "" }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      ImageUrl: prev.ImageUrl.filter((_, i) => i !== index),
    }));
  };

  const removeImageFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Title.trim()) newErrors.Title = "Title is required";
    if (!formData.Description1.trim())
      newErrors.Description1 = "Subtitle is required";
    if (!formData.Description2.trim())
      newErrors.Description2 = "Description is required";
    if (!formData.ButtonMessage1.trim())
      newErrors.ButtonMessage1 = "Button text is required";
    if (isEditing) {
      const hasImages =
        formData.images.length > 0 || formData.ImageUrl.length > 0;

      if (!hasImages) {
        newErrors.ImageUrl = "At least one image is required";
      }
    } else {
      if (formData.images.length === 0) {
        newErrors.ImageUrl = "At least one image is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (uploadedUrls) => {
    console.log(formData);
    const { images, ...rest } = formData;
    const payload = {
      ...rest,
      ImageUrl: [
        ...formData.ImageUrl.filter((url) => !url.startsWith("blob:")),
        ...uploadedUrls,
      ],
    };

    const action = isEditing ? updateData : postData;
    const endpoint = isEditing ? `services/${formData.DocId}` : "services";

    action({
      endpoint,
      payload,
      onsuccess: (result) => {
        if (result) onSave();
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const uploadedUrls = [];

    const uploadNext = (index) => {
      if (index >= formData.images.length) {
        handleFormSubmit(uploadedUrls);
        return;
      }

      postData({
        endpoint: "files/admin",
        payload: formData.images[index],
        onsuccess: (result) => {
          uploadedUrls.push(result.FileUrl);
          uploadNext(index + 1);
        },
      });
    };

    if (formData.images.length > 0) {
      uploadNext(0);
    } else {
      handleFormSubmit([]);
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
        <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Service Information
            </h2>

            {/* Title */}
            <div className="space-y-6">
              {/* Title Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Title *
                </label>
                <input
                  type="text"
                  value={formData.Title}
                  onChange={(e) => handleInputChange("Title", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.Title
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="e.g., Web Development"
                />
                {errors.Title && (
                  <p className="mt-1 text-sm text-red-600">{errors.Title}</p>
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
                    errors.Priority
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Order Priority"
                />
                {errors.priority && (
                  <p className="mt-1 text-sm text-red-600">{errors.priority}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Description *
                </label>
                <textarea
                  rows={6}
                  value={formData.Description2}
                  onChange={(e) =>
                    handleInputChange("Description2", e.target.value)
                  }
                  className={`w-full px-4 py-3 border rounded-lg resize-none ${
                    errors.Description2
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Detailed description..."
                />
                {errors.Description2 && (
                  <p className="text-sm text-red-600">{errors.Description2}</p>
                )}
              </div>

              {/* Subtitle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Subtitle *
                </label>
                <input
                  type="text"
                  value={formData.Description1}
                  onChange={(e) =>
                    handleInputChange("Description1", e.target.value)
                  }
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.Description1
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="e.g., Modern Web Apps"
                />
                {errors.Description1 && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.Description1}
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Button Text *
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
                  placeholder="e.g., Contact Us"
                />
                {errors.ButtonMessage1 && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.ButtonMessage1}
                  </p>
                )}
              </div>

              {/* Services List */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  List of Services
                </label>
                {formData.ServiceList.map((service, index) => (
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
                    <button
                      type="button"
                      onClick={() => removeService(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addService}
                  className="text-blue-600 hover:underline mt-2 flex items-center"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add New Service
                </button>
              </div>

              {/* Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Images *
                </label>
                <div className="flex flex-wrap gap-4">
                  {formData.ImageUrl.map((url, index) => (
                    <div
                      key={index}
                      className="relative w-[250px] aspect-video border rounded-md"
                    >
                      <img
                        src={url}
                        alt={`Preview ${index}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 p-1.5 bg-red-600 text-white rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {formData.images.map((item, index) => {
                    let imageUrl = "";

                    const byteArray = new Uint8Array(item.FileData);
                    const blob = new Blob([byteArray], { type: "image/jpeg" }); // or image/png
                    imageUrl = URL.createObjectURL(blob);

                    return (
                      <div
                        key={index}
                        className="relative w-[250px] aspect-video border rounded-md"
                      >
                        <img
                          src={imageUrl}
                          alt={`Preview ${index}`}
                          className="w-full h-full object-cover rounded-md"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/fallback-image.jpg"; // optional fallback
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => removeImageFile(index)}
                          className="absolute top-1 right-1 p-1.5 bg-red-600 text-white rounded-full"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}

                  <input
                    type="file"
                    id="image-upload"
                    multiple
                    accept=".jpg, .jpeg, .webp"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="image-upload"
                    className={`w-[250px] aspect-video border-2 border-dashed p-8 text-center flex flex-col justify-center items-center text-sm text-gray-500 cursor-pointer rounded-lg ${
                      errors.ImageUrl
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    }`}
                  >
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
                {errors.ImageUrl && (
                  <p className="text-sm text-red-600 mt-1">{errors.ImageUrl}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4 bg-white border rounded-xl p-6">
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

        {/* Preview */}
        <div className="">
          <ServicePreviewCard service={formData} />
        </div>
      </div>
    </div>
  );
};

export default AddServicePage;
