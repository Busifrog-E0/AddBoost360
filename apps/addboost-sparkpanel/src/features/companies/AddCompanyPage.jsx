import { useState } from "react";
import { Save, ArrowLeft, Plus, Trash2 } from "lucide-react";
import usePostData from "../../hooks/api/usePostData";
import useUpdateData from "../../hooks/api/useUpdateData";
import ImageUploader from "../../components/ImageUploader";
import useHandleImageUpload from "../../hooks/handleImageUpload";

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
  const electronicsTypeOptions = [
    "Smartphones",
    "Tablets",
    "Laptops & Computers",
    "TV & Home Theater",
    "Cameras & Drones",
    "Gaming Consoles & Accessories",
  ];

  const homeAppliancesTypeOptions = [
    "Refrigerators & Freezers",
    "Washing Machines & Dryers",
    "Kitchen Appliances",
    "Air Conditioners & Heaters",
    "Vacuum Cleaners & Home Cleaning",
  ];

  const furnitureAndHomeDecorTypeOptions = [
    "Living & Bedroom Furniture",
    "Kitchen & Dining Furniture",
    "Home Decor & Accessories",
    "Bedding & Bath Essentials",
  ];

  const fashionAndApparelTypeOptions = [
    "Men's Clothing",
    "Women's Clothing",
    "Shoes & Footwear",
    "Jewelry & Accessories",
  ];

  const beautyAndPersonalCareTypeOptions = [
    "Skincare",
    "Hair Care",
    "Makeup & Cosmetics",
    "Fragrances & Perfumes",
    "Grooming Tools & Appliances",
  ];

  const healthAndWellnessTypeOptions = [
    "Vitamins & Supplements",
    "Health Monitors & Devices",
    "Medical Supplies & First Aid",
    "Wellness & Self-Care",
    "Essential Oils",
  ];

  const sportsAndOutdoorsTypeOptions = [
    "Camping & Hiking Gear",
    "Fitness & Exercise Equipment",
    "Team Sports Gear",
    "Cycling & Bikes",
  ];

  const toysAndGamesTypeOptions = [
    "Kids' Toys",
    "Board Games & Puzzles",
    "Educational & STEM Toys",
    "Collectibles & Hobby Kits",
  ];

  const booksAndMediaTypeOptions = [
    "Books & eBooks",
    "Movies & TV Shows",
    "Music & Audio",
  ];

  const foodAndBeverageTypeOptions = [
    "Groceries & Pantry Staples",
    "Snacks & Confectionery",
    "Beverages (Coffee, Tea, etc.)",
    "Gourmet & Specialty Foods",
  ];

  const petSuppliesTypeOptions = [
    "Pet Food & Treats",
    "Pet Toys & Accessories",
    "Pet Grooming & Health",
    "Pet Beds & Housing",
  ];

  const babyAndKidsTypeOptions = [
    "Baby Gear (Strollers & Car Seats)",
    "Baby Food & Diapers",
    "Nursery Furniture & Bedding",
    "Baby & Kids Clothing",
    "Baby Toys & Gifts",
  ];

  const officeSuppliesAndStationeryTypeOptions = [
    "Office Electronics & Printers",
    "Office Furniture",
    "Stationery & Office Supplies",
    "Ink & Toner",
  ];

  const artsAndCraftsTypeOptions = [
    "Art Supplies",
    "Craft Kits & DIY",
    "Fabric & Sewing Supplies",
  ];

  const toolsAndHomeImprovementTypeOptions = [
    "Power Tools & Equipment",
    "Hand Tools & Hardware",
    "Home Improvement Supplies",
    "Garden Tools & Outdoor Equipment",
  ];

  const industrialAndScientificSuppliesTypeOptions = [
    "Industrial Machinery & Tools",
    "Safety & PPE Equipment",
    "Lab & Scientific Equipment",
  ];

  const automotiveTypeOptions = [
    "Auto Parts & Spares",
    "Car Electronics & Accessories",
    "Car Care & Maintenance",
    "Motorcycle & ATV Gear",
  ];

  const digitalProductsTypeOptions = [
    "E-books & Online Publications",
    "Software & Apps",
    "Online Courses & Tutorials",
    "Digital Media & Downloads",
    "Gift Cards & Vouchers",
  ];

  const professionalServicesTypeOptions = [
    "Business Consulting",
    "Graphic Design & Creative",
    "Marketing & SEO Services",
    "Web Development & IT Services",
    "Personal Coaching & Training",
  ];
  const allOptionGroups = [
    { label: "A. Electronics", options: electronicsTypeOptions },
    { label: "B. Home Appliances", options: homeAppliancesTypeOptions },
    {
      label: "C. Furniture & Home Decor",
      options: furnitureAndHomeDecorTypeOptions,
    },
    { label: "D. Fashion & Apparel", options: fashionAndApparelTypeOptions },
    {
      label: "E. Beauty & Personal Care",
      options: beautyAndPersonalCareTypeOptions,
    },
    { label: "F. Health & Wellness", options: healthAndWellnessTypeOptions },
    { label: "G. Sports & Outdoors", options: sportsAndOutdoorsTypeOptions },
    { label: "H. Toys & Games", options: toysAndGamesTypeOptions },
    { label: "I. Books & Media", options: booksAndMediaTypeOptions },
    { label: "J. Food & Beverage", options: foodAndBeverageTypeOptions },
    { label: "K. Pet Supplies", options: petSuppliesTypeOptions },
    { label: "L. Baby & Kids", options: babyAndKidsTypeOptions },
    {
      label: "M. Office Supplies & Stationery",
      options: officeSuppliesAndStationeryTypeOptions,
    },
    { label: "N. Arts & Crafts", options: artsAndCraftsTypeOptions },
    {
      label: "O. Tools & Home Improvement",
      options: toolsAndHomeImprovementTypeOptions,
    },
    {
      label: "P. Industrial & Scientific Supplies",
      options: industrialAndScientificSuppliesTypeOptions,
    },
    { label: "Q. Automotive", options: automotiveTypeOptions },
    { label: "R. Digital Products", options: digitalProductsTypeOptions },
    {
      label: "S. Professional Services",
      options: professionalServicesTypeOptions,
    },
  ];

  const [formData, setFormData] = useState(initialValue);

  const [errors, setErrors] = useState({});
  const { isLoading, postData } = usePostData({});

  const { handleImageUpload, isLoading: isImageUploading } =
    useHandleImageUpload();
  const { updateLoading, updateData } = useUpdateData({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Title.trim()) newErrors.Title = "Company name is required";

    if (formData.Tags.length === 0) {
      newErrors.Tags = "At least one service area is required";
    } else {
      const emptyService = formData.Tags.some(
        (item) => !item || item.trim() === ""
      );
      if (emptyService) {
        newErrors.Tags = "Please fill in all service area fields.";
      }
    }

    // if (
    //   !formData.Tags.length ||
    //   formData.Tags.every((cat) => cat.trim() === "")
    // )
    //   newErrors.Tags = "Product categories are required";

    if (formData.Priority === "") {
      newErrors.Priority = "Priority is required";
    }

    if (!formData.Country.trim()) newErrors.Country = "Country is required";
    if (!formData.State.trim()) newErrors.State = "State is required";
    if (!formData.ImageUrl) newErrors.ImageUrl = "Company image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (fileUrl) => {
    const { image, ImageUrl, ...rest } = formData;
    const payload = { ...rest, ImageUrl: fileUrl };

    //in payload, remove the element from Tags, if it is "", undefined or null
    payload.Tags = payload.Tags.filter((tag) => tag && tag.trim() !== "");

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
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Company Information
          </h2>

          {/* Company Name */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name *
            </label>
            <input
              type="text"
              value={formData.Title}
              onChange={(e) => handleInputChange("Title", e.target.value)}
              className={`w-full px-4 py-3 border  rounded-lg ${
                errors.Title ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="e.g., Razorpay"
            />
            {errors.Title && (
              <p className="text-sm text-red-600 mb-2 ">{errors.Title}</p>
            )}
          </div>
          {/* Priority */}
          <div className="space-y-6 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 ">
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
                <p className=" text-sm text-red-600">{errors.Priority}</p>
              )}
            </div>
          </div>

          {/* Product Categories */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Areas *
            </label>

            {formData.Tags.map((category, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <div className="w-full">
                  <select
                    value={category}
                    onChange={(e) => {
                      const updated = [...formData.Tags];
                      updated[index] = e.target.value;
                      handleInputChange("Tags", updated);
                    }}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      errors.Tags
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="" disabled>
                      Select a Category
                    </option>

                    {allOptionGroups.map((group, idx) => (
                      <optgroup key={`group-${idx}`} label={group.label}>
                        {group.options.map((option) => (
                          <option key={`${idx}-${option}`} value={option}>
                            {option}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {/* Delete Button Always Visible */}
                <button
                  type="button"
                  onClick={() => {
                    const updated = [...formData.Tags];
                    updated.splice(index, 1);
                    handleInputChange("Tags", updated);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}

            <div className="flex items-center space-x-2 mt-2">
              <button
                type="button"
                onClick={() =>
                  handleInputChange("Tags", [...formData.Tags, ""])
                }
                className="flex items-center mt-1 mb-2 text-blue-600 hover:underline"
              >
                <Plus className="w-4 h-4 mr-1" /> Add New Category
              </button>
            </div>

            {errors.Tags && (
              <p className="text-sm text-red-600 mb-2">{errors.Tags}</p>
            )}
          </div>

          {/*State */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State *
            </label>
            <input
              type="text"
              value={formData.State}
              onChange={(e) => handleInputChange("State", e.target.value)}
              className={`w-full px-4 py-3 border  rounded-lg ${
                errors.State ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="e.g., India"
            />
            {errors.State && (
              <p className="text-sm text-red-600 mb-2">{errors.State}</p>
            )}
          </div>
          {/* Country */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country *
            </label>
            <input
              type="text"
              value={formData.Country}
              onChange={(e) => handleInputChange("Country", e.target.value)}
              className={`w-full px-4 py-3 border  rounded-lg ${
                errors.Country ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="e.g., India"
            />
            {errors.Country && (
              <p className="text-sm text-red-600 mb-2">{errors.Country}</p>
            )}
          </div>

          {/* Image Upload */}
          <div className="">
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
