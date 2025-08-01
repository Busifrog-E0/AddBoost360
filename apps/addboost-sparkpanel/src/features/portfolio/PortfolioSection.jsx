import React, { useState } from "react";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import AddPortfolioPage from "./AddPortfolioPage";
import useGetList from "../../hooks/api/useGetList";
import Loader from "../../components/Loader";
import useDeleteData from "../../hooks/api/UseDeleteData";

const PortfolioSection = () => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [showEditProject, setShowEditProject] = useState(false);
  const [portfolioToBeEdited, setportfolioToBeEdited] = useState(null);
  const { deleteData } = useDeleteData({});

  const {
    data: portfolios,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
  } = useGetList({ endpoint: "portfolios" });

  const handleAddProject = () => {
    setportfolioToBeEdited(null);
    setShowAddProject(true);
  };

  const handleEditProject = (project) => {
    setportfolioToBeEdited(project);
    setShowEditProject(true);
  };

  const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      deleteData({
        endpoint: `portfolios/${id}`,
        onsuccess: (result) => {
          if (result) {
            handleSaveProject();
          }
        },
      });
    }
  };

  const handleSaveProject = (projectData) => {
    setShowAddProject(false);
    setShowEditProject(false);
    setportfolioToBeEdited(null);
    getList([]);
  };

  const handleBack = () => {
    setShowAddProject(false);
    setShowEditProject(false);
    setportfolioToBeEdited(null);
  };

  if (showAddProject) {
    return (
      <AddPortfolioPage
        isEditing={false}
        title="Add New Project"
        description="Create a new project offering for your business"
        onBack={handleBack}
        onSave={handleSaveProject}
      />
    );
  }

  if (showEditProject) {
    return (
      <AddPortfolioPage
        isEditing={true}
        title="Edit Portfolio Project"
        description="Edit the details of your existing project offering"
        onBack={handleBack}
        onSave={handleSaveProject}
        initialValue={portfolioToBeEdited}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
          <p className="text-gray-600 mt-1">Showcase your best work</p>
        </div>
        <button
          onClick={handleAddProject}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow border overflow-hidden"
              >
                <img
                  src={item.ImageUrl}
                  alt={item.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4 space-y-2">
                  {/* Top: Title + Actions */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{item.Title}</h3>

                      {item.Priority && (
                        <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
                          Priority: {item.Priority}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditProject(item)}
                        className="p-1.5  text-blue-600 hover:bg-blue-50 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProject(item.DocId)}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Visit Link */}
                  {item.linkToProject && (
                    <div className="flex justify-end mt-2 text-sm">
                      <a
                        href={item.linkToProject}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:underline"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Visit
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {portfolios.length === 0 && (
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
                onClick={handleAddProject}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Your First Portfolio
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PortfolioSection;
