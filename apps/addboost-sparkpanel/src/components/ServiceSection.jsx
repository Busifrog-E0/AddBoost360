import React, { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import AddServicePage from "./AddServicePage";
import EditServicePage from "./EditServicePage";

const ServiceSection = () => {
  const [showAddService, setShowAddService] = useState(false);
  const [showEditService, setShowEditService] = useState(false);
  const [serviceToBeEdited, setServiceToBeEdited] = useState(null);
  const [services, setServices] = useState([

    {
      id: 1,
      title: "Web Development",
      subtitle: "Custom web applications using modern technologies",
      description:
        "We create responsive, fast, and secure web applications using the latest technologies like React, Node.js, and cloud services.",
      buttonText: "Get Started",
      image: null,
      imagePreview:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      services: [""],
    },
    {
      id: 2,
      title: "Mobile App Development",
      subtitle: "Native and cross-platform mobile applications",
      description:
        "Build powerful mobile apps for iOS and Android platforms with seamless user experience and robust functionality.",
      buttonText: "Learn More",
      image: null,
      imagePreview:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=400",
      services: [""],
    },
    {
      id: 3,
      title: "UI/UX Design",
      subtitle: "User interface and experience design services",
      description:
        "Create stunning and intuitive designs that enhance user engagement and drive business growth.",
      buttonText: "View Portfolio",
      image: null,
      imagePreview:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      services: [""],
    },
    {
      id: 4,
      title: "Digital Marketing",
      subtitle: "Comprehensive digital marketing strategies",
      description:
        "Boost your online presence with our data-driven marketing strategies and campaigns.",
      buttonText: "Contact Us",
      image: null,
      imagePreview:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      services: [""],
    },
  ]);

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
      setServices((prev) => prev.filter((service) => service.id !== serviceId));
    }
  };

  const handleBackToServices = () => {
    setShowAddService(false);
    setShowEditService(false);
    setServiceToBeEdited(null);
  };

  const handleSaveService = (serviceData) => {
    if (serviceToBeEdited) {
      setServices((prev) =>
        prev.map((service) =>
          service.id === serviceToBeEdited.id
            ? { ...service, ...serviceData, id: serviceToBeEdited.id }
            : service
        )
      );
    } else {
      const newService = {
        ...serviceData,
        id: Date.now(),
      };
      setServices((prev) => [...prev, newService]);
    }
    setShowAddService(false);
    setShowEditService(false);
    setServiceToBeEdited(null);
  };

  if (showAddService) {
    return (
      <AddServicePage
        onBack={handleBackToServices}
        onSave={handleSaveService}
      />
    );
  }
  if (showEditService) {
    return (
      <EditServicePage
        onBack={handleBackToServices}
        onSave={handleSaveService}
        serviceToBeEdited={serviceToBeEdited}
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
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-200 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-700">
                  Service
                </th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">
                  Subtitle
                </th>
                <th className="text-center py-4 px-6 font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {services.map((service) => (
                <tr
                  key={service.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* Service Info with Image */}
                  <td className="py-3 px-5">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={service.imagePreview}
                          alt={service.title}
                          className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-semibold text-gray-900">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Subtitle */}
                  <td className="py-4 px-6">
                    <p
                      className="text-sm text-gray-700 leading-relaxed max-w-md"
                      title={service.subtitle}
                    >
                      {service.subtitle}
                    </p>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleEditService(service)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit service"
                      >
                        <Edit className="w-5 h-5" />
                      </button>

                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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

      {/* Quick Stats */}
    </div>
  );
};

export default ServiceSection;
