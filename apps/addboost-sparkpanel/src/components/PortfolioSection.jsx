import React, { useState } from "react";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import AddportfolioPage from "./AddportfolioPage";

const PortfolioSection = () => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: "E-commerce Launch - UK-Based Organic Skincare Brand",
      impactPoints: [
        "400% increase in organic traffic in 6 months",
        "Cross-border shipping integration",
        "One-month sales target met in 18 days",
      ],
      image: "https://images.pexels.com/photos/3762876/pexels-photo-3762876.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      buttonText: "View Website",
      type: "Website Design, Branding, Social Media Marketing, Product Sourcing from India",
      linkToProject: "https://google.com",
    },
    {
      id: 2,
      title: "AI Chatbot & Automation - Dubai Real Estate Agency",
      impactPoints: [
        "Reduced response time by 80%",
        "Converted 2x more leads with automated follow-ups",
        "24/7 virtual support improved client satisfaction",
      ],
      image: "https://images.pexels.com/photos/8031872/pexels-photo-8031872.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      buttonText: "View Project",
      type: "AI Integration, Lead Automation, WhatsApp Chatbot, CRM Setup",
      linkToProject: "https://google.com",
    },
    {
      id: 3,
      title: "Empowerment Training - Marketing Team in Philippines",
      impactPoints: [
        "Trained 15+ staff to manage their brand's marketing",
        "Social media ads optimized internally",
        "Saved over £1,500 in outsourced costs within 3 months",
      ],
      image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      buttonText: "Download Course Outline",
      type: "Live SEO, Meta Ads & Canva Masterclass for Local Startup",
      linkToProject: "https://google.com",
    },
    {
      id: 4,
      title: "Influencer Campaign - UAE Luxury Watch Brand",
      impactPoints: [
        "Partnered with 4 key regional influencers",
        "250% ROI on campaign",
        "1200+ new followers in 10 days",
      ],
      image: "https://images.pexels.com/photos/19387226/pexels-photo-19387226.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      buttonText: "See Campaign Results",
      type: "Influencer Marketing, Paid Ads, Content Creation",
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
