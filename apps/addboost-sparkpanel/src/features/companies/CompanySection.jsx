import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import AddCompanyPage from "./AddCompanyPage";
import useGetList from "../../hooks/api/useGetList";
import useDeleteData from "../../hooks/api/useDeleteData";
import Loader from "../../components/Loader";

const CompanySection = () => {
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [showEditCompany, setshowEditCompany] = useState(false);
  const [companyToBeEdited, setcompanyToBeEdited] = useState(null);
  const { deleteData } = useDeleteData({});

  const {
    data: organizations,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
  } = useGetList({ endpoint: "organizations" });

  const handleAddCompany = () => {
    setcompanyToBeEdited(null);
    setShowAddCompany(true);
  };

  const handleEditCompany = (company) => {
    setcompanyToBeEdited(company);
    setshowEditCompany(true);
  };

  const handleDeleteCompany = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      deleteData({
        endpoint: `organizations/${id}`,
        onsuccess: (result) => {
          if (result) {
            handleSaveCompany();
          }
        },
      });
    }
  };

  // const handleDeleteCompany = (id) => {
  //   if (window.confirm("Are you sure you want to delete this company?")) {
  //     setCompanies((prev) => prev.filter((c) => c.id !== id));
  //   }
  // };

  const handleSaveCompany = (companyData) => {
    setShowAddCompany(false);
    setshowEditCompany(false);
    setcompanyToBeEdited(null);
    getList([]);
  };

  const handleBack = () => {
    setShowAddCompany(false);
    setshowEditCompany(false);
    setcompanyToBeEdited(null);
  };

  if (showAddCompany) {
    return (
      <AddCompanyPage
        isEditing={false}
        title="Add New Company"
        description="Create a new company profile"
        onBack={handleBack}
        onSave={handleSaveCompany}
      />
    );
  }
  if (showEditCompany) {
    return (
      <AddCompanyPage
        isEditing={true}
        title="Edit Company"
        description="Edit the details of your existing company offering"
        onBack={handleBack}
        onSave={handleSaveCompany}
        initialValue={companyToBeEdited}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Companies</h1>
          <p className="text-gray-600 mt-1">Manage your company list</p>
        </div>
        <button
          onClick={handleAddCompany}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Company</span>
        </button>
      </div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          {/* Company Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[640px] sm:min-w-full">
                <thead className="bg-gray-200 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-4 sm:px-6 font-medium text-gray-700 text-sm">
                      Company
                    </th>
                    <th className="text-left py-4 px-4 sm:px-6 font-medium text-gray-700 text-sm">
                      Country
                    </th>
                    <th className="text-center py-4 px-4 sm:px-6 font-medium text-gray-700 text-sm">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {organizations.map((company) => (
                    <tr
                      key={company.DocId}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      {/* Company Info */}
                      <td className="py-3 px-4 sm:px-5">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              src={company.ImageUrl}
                              alt={company.Title}
                              className="w-20 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-200"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm sm:text-base font-semibold text-gray-900 break-words">
                              {company.Title}
                            </p>
                            {company.Priority && (
                              <span className="inline-block mt-1 sm:mt-2 px-2 py-0.5 text-[10px] sm:text-xs font-semibold bg-red-100 text-red-600 rounded-full whitespace-nowrap">
                                Priority: {company.Priority}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Country Info */}
                      <td className="py-4 px-4 sm:px-6">
                        <p className="text-sm text-gray-700 leading-relaxed max-w-[160px] sm:max-w-md break-words">
                          {company.State}, {company.Country}
                        </p>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => handleEditCompany(company)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit company"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteCompany(company.DocId)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete company"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {organizations.length === 0 && (
              <div className="text-center py-12 px-4">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Plus className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No companies added yet
                </h3>
                <p className="text-gray-500 mb-4">
                  Get started by adding your first company.
                </p>
                <button
                  onClick={handleAddCompany}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Your First Company
                </button>
              </div>
            )}

            {/* Load More Button */}
            {!isPageDisabled && (
              <div className="flex justify-center mt-6 px-4">
                <button
                  onClick={() => getList(organizations, false)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60"
                  disabled={isLoadingMore}
                >
                  {isLoadingMore ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                      />
                    </svg>
                  ) : (
                    "Load More"
                  )}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CompanySection;
