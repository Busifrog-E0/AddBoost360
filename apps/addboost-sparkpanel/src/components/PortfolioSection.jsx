import React, { useState } from "react";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import AddportfolioPage from "./AddportfolioPage";

const PortfolioSection = () => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      type: "Website Design, Branding, Social Media Marketing, Product Sourcing from India",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkToProject: "https://google.com",
    },
    {
      id: 2,
      title: "AI Chatbot & Automation- Dubai Real Estate Agency",
      type: "AI Integration, Lead Automation, WhatsApp Chatbot, CRM Setup",
      image:
        "data:image/jpeg;base64,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",
      linkToProject: "https://google.com",
    },
    {
      id: 3,
      title: "Influencer Campaign - UAE Luxury Watch Brand",
      type: "Influencer Marketing, Paid Ads, Content Creation",
      image:
        "https://www.watchesandcrystals.com/cdn/shop/articles/how-expensive-watches-have-been-a-new-luxury-684973.jpg?v=1659676086",
      linkToProject: "https://google.com",
    },
    {
      id: 4,
      title: "Empowerment Training - Marketing Team in Philippines",
      type: "Live SEO, Meta Ads & Canva Masterclass for Local Startup",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s",
      linkToProject: "https://google.com",
    },
  ]);

  const handleAddProject = () => {
    setEditingProject(null);
    setShowAddProject(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowAddProject(true);
  };

  const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setPortfolioItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleSaveProject = (projectData) => {
    if (editingProject) {
      setPortfolioItems((prev) =>
        prev.map((item) =>
          item.id === editingProject.id ? { ...item, ...projectData } : item
        )
      );
    } else {
      const newProject = { ...projectData, id: Date.now() };
      setPortfolioItems((prev) => [...prev, newProject]);
    }
    setShowAddProject(false);
    setEditingProject(null);
  };

  const handleBack = () => {
    setShowAddProject(false);
    setEditingProject(null);
  };

  if (showAddProject) {
    return (
      <AddportfolioPage
        onBack={handleBack}
        onSave={handleSaveProject}
        initialData={editingProject}
        isEditing={!!editingProject}
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

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow border overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              {/* Top: Title + Actions */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  {item.type && (
                    <p className="text-xs text-gray-500 mt-1">{item.type}</p>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditProject(item)}
                    className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteProject(item.id)}
                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
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
    </div>
  );
};

export default PortfolioSection;
