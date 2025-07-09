import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import AddCompanyPage from "./AddCompanyPage";

const CompanySection = () => {
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);

  const [companies, setCompanies] = useState([
    {
      id: 1,
      title: "Razorpay",
      country: "Bengaluru, India",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg"
    },
    {
      id: 2,
      title: "Miro",
      country: "Amsterdam, Netherlands",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg"
    },
    {
      id: 3,
      title: "Notion",
      country: "San Francisco, United States",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg"
    },
    {
      id: 4,
      title: "LottieFiles",
      productCategories: ["Fintech", "Payments"],
      country: "Kuala Lumpur, Malaysia",
      image: "https://images.pexels.com/photos/1181303/pexels-photo-1181303.jpeg"
    },
    {
      id: 5,
      title: "DeepL",
      country: "Cologne, Germany",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
    },
    {
      id: 6,
      title: "Copy.ai",
      country: "New York, United States",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg"
    },
    {
      id: 7,
      title: "CRED",
      country: "Bengaluru, India",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg"
    },
    {
      id: 8,
      title: "Hopin",
      country: "London, United Kingdom",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
    },
    {
      id: 9,
      title: "Sendinblue",
      country: "Paris, France",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
    },
    {
      id: 10,
      title: "Deel",
      country: "San Francisco, United States",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
    }
  ]);

  const handleAddCompany = () => {
    setEditingCompany(null);
    setShowAddCompany(true);
  };

  const handleEditCompany = (company) => {
    setEditingCompany(company);
    setShowAddCompany(true);
  };

  const handleDeleteCompany = (id) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      setCompanies((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const handleSaveCompany = (companyData) => {
    if (editingCompany) {
      setCompanies((prev) =>
        prev.map((company) =>
          company.id === editingCompany.id
            ? { ...company, ...companyData }
            : company
        )
      );
    } else {
      const newCompany = { ...companyData, id: Date.now() };
      setCompanies((prev) => [...prev, newCompany]);
    }
    setShowAddCompany(false);
    setEditingCompany(null);
  };

  const handleBack = () => {
    setShowAddCompany(false);
    setEditingCompany(null);
  };

  if (showAddCompany) {
    return (
      <AddCompanyPage
        onBack={handleBack}
        onSave={handleSaveCompany}
        initialData={editingCompany}
        isEditing={!!editingCompany}
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

      {/* Company Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-200 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-700">
                  Company
                </th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">
                  Country
                </th>
                <th className="text-center py-4 px-6 font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {companies.map((company) => (
                <tr
                  key={company.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-5">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={company.image}
                          alt={company.title}
                          className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-semibold text-gray-900">
                          {company.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {company.productCategories?.join(", ")}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-700 leading-relaxed max-w-md">
                      {company.country}
                    </p>
                  </td>

                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleEditCompany(company)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit company"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteCompany(company.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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

        {companies.length === 0 && (
          <div className="text-center py-12">
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
      </div>
    </div>
  );
};

export default CompanySection;
