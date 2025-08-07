import React, { useState } from "react";
import { Plus, Edit, Trash2, Image as ImageIcon } from "lucide-react";
import useGetList from "../../hooks/api/useGetList";
import useDeleteData from "../../hooks/api/useDeleteData";
import AddCompanyLogo from "./AddCompanyLogo";
import Loader from "../../components/Loader";

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
        title="Add Service Provider"
        description="Upload a new company "
        onBack={handleBack}
        onSave={handleSave}
      />
    );
  }

  if (showEditLogo) {
    return (
      <AddCompanyLogo
        isEditing={true}
        title="Edit Service Provider"
        description="Update the selected company "
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
          <h1 className="text-2xl font-bold text-gray-900 ">
            Transaction/Payment Service Providers
          </h1>
          <p className="text-gray-600 mt-1">Manage Highlighted Companies</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={16} />
          Add Entry
        </button>
      </div>

      {isLoading == true ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {companylogos.map((logo) => (
              <div
                key={logo.DocId}
                className="bg-white border rounded-xl px-4 py-5 shadow-sm hover:shadow-md transition flex items-center justify-between"
              >
                {/* Image + Info Section */}
                <div className="flex items-center gap-4">
                  <div className="w-20 aspect-video p-2 overflow-hidden rounded-md border">
                    <img
                      src={logo.ImageUrl}
                      alt={logo.Title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {logo.Title}
                    </h3>
                    <span className=" inline-block bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
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
                No companies yet
              </h3>
              <p className="text-gray-500 mb-4">
                Get started by creating your first service provider.
              </p>
              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Your First Entry
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CompanyLogoSection;
