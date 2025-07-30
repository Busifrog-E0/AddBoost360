import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import AddServicePage from "./AddServicePage";
import useGetList from "../../hooks/api/useGetList";
import useDeleteData from "../../hooks/api/UseDeleteData";

const ServiceSection = () => {
  const {
    data: services,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
  } = useGetList({ endpoint: "services" });

  const [showAddService, setShowAddService] = useState(false);
  const [showEditService, setShowEditService] = useState(false);
  const [serviceToBeEdited, setServiceToBeEdited] = useState(null);
  const { deleteData } = useDeleteData({});

  const handleAddService = () => {
    setServiceToBeEdited(null);
    setShowAddService(true);
  };

  const handleEditService = (service) => {
    setServiceToBeEdited(service);
    setShowEditService(true);
  };

  const handleDeleteService = (serviceId) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      deleteData({
        endpoint: `services/${serviceId}`,
        onsuccess: (result) => {
          if (result) {
            handleSaveService();
          }
        },
      });
    }
  };

  const handleBackToServices = () => {
    setShowAddService(false);
    setShowEditService(false);
    setServiceToBeEdited(null);
  };

  const handleSaveService = () => {
    setShowAddService(false);
    setShowEditService(false);
    setServiceToBeEdited(null);
    getList([]);
  };

  if (showAddService) {
    return (
      <AddServicePage
        title="Add New Service"
        description="Create a new service offering for your business"
        isEditing={false}
        onBack={handleBackToServices}
        onSave={handleSaveService}
      />
    );
  }

  if (showEditService) {
    return (
      <AddServicePage
        title="Edit Service"
        description="Edit the details of your existing service offering"
        isEditing={true}
        onBack={handleBackToServices}
        onSave={handleSaveService}
        initialValue={serviceToBeEdited}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Services</h1>
          <p className="text-gray-600 mt-1">Manage your service offerings</p>
        </div>
        <button
          onClick={handleAddService}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Service</span>
        </button>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {services.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-200 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Service
                  </th>
                  <th className="text-center py-4 px-6 font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {services.map((service) => (
                  <tr
                    key={service.DocId}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {/* Service Info with Image and Priority */}
                    <td className="py-3 px-5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                        <div className="flex-shrink-0">
                          <img
                            src={service.ImageUrl[0]}
                            alt={service.Title}
                            className="w-12 h-12 rounded-full object-cover border border-gray-200"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-base font-semibold text-gray-900">
                            {service.Title}
                          </p>
                          {service.Priority && (
                            <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-600 rounded-full">
                              Priority: {service.Priority}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => handleEditService(service)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit service"
                        >
                          <Edit className="w-5 h-5" />
                        </button>

                        <button
                          onClick={() => handleDeleteService(service.DocId)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete service"
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
        )}

        {/* Empty State */}
        {services.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No services yet
            </h3>
            <p className="text-gray-500 mb-4">
              Get started by creating your first service offering.
            </p>
            <button
              onClick={handleAddService}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Your First Service
            </button>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {!isPageDisabled && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => getList(services, false)}
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
  );
};

export default ServiceSection;
