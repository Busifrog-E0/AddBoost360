import React, { useState } from "react";
import { Plus, Edit, Trash2, Image as ImageIcon } from "lucide-react";
import useGetList from "../../hooks/api/useGetList";
import useDeleteData from "../../hooks/api/UseDeleteData";
import AddCompanyLogo from "./AddCompanyLogo";

const CompanyLogoSection = () => {
  const [showAddLogo, setShowAddLogo] = useState(false);
  const [showEditLogo, setShowEditLogo] = useState(false);
  const [logoToBeEdited, setLogoToBeEdited] = useState(null);

  const { deleteData } = useDeleteData({});
  const {
    data: companylogos,
    isLoading,
    getList,
  } = useGetList({ endpoint: "companyLogos" });

  const handleAdd = () => {
    setShowEditLogo(false);
    setShowAddLogo(true);
  };

  const handleEdit = (logo) => {
    setLogoToBeEdited(logo);
    setShowEditLogo(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this logo?")) {
      deleteData({
        endpoint: `companyLogos/${id}`,
        onsuccess: (result) => {
          if (result) handleSave();
        },
      });
    }
  };

  const handleSave = () => {
    setShowAddLogo(false);
    setShowEditLogo(false);
    setLogoToBeEdited(null);
    getList([]);
  };

  const handleBack = () => {
    setShowAddLogo(false);
    setShowEditLogo(false);
    setLogoToBeEdited(null);
  };

  if (showAddLogo) {
    return (
      <AddCompanyLogo
        isEditing={false}
        title="Add Company Logo"
        description="Upload a new company logo"
        onBack={handleBack}
        onSave={handleSave}
      />
    );
  }

  if (showEditLogo) {
    return (
      <AddCompanyLogo
        isEditing={true}
        title="Edit Company Logo"
        description="Update the selected company logo"
        onBack={handleBack}
        onSave={handleSave}
        initialValue={logoToBeEdited}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Company Logos
          </h1>
          <p className="text-gray-500 text-sm">
            Manage logos of featured companies
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={16} />
          Add Logo
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {companylogos.map((logo) => (
          <div
            key={logo.DocId}
            className="bg-white border rounded-xl px-4 py-5 shadow-sm hover:shadow-md transition flex items-center justify-between"
          >
            {/* Image + Info Section */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 overflow-hidden rounded-full border">
                <img
                  src={logo.ImageUrl}
                  alt={logo.Title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {logo.Title}
                </h3>
                <span className="inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded bg-red-100 text-red-600">
                  Priority: {logo.Priority}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleEdit(logo)}
                className="text-blue-600 hover:text-blue-800"
                title="Edit"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => handleDelete(logo.DocId)}
                className="text-red-600 hover:text-red-800"
                title="Delete"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {companylogos.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No portfolios yet
          </h3>
          <p className="text-gray-500 mb-4">
            Get started by creating your first service offering.
          </p>
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Your First Logo
          </button>
        </div>
      )}
    </div>
  );
};

export default CompanyLogoSection;
