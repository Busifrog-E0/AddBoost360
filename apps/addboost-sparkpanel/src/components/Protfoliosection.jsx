import React, { useState } from "react";
import { Plus, Edit, Trash2, Eye, ExternalLink } from "lucide-react";
import AddportfolioPage from "./AddportfolioPage";

const PortfolioSection = () => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
      client: "TechCorp Inc.",
      status: "Completed",
      date: "2024-01-15",
    },
    // ... other projects
  ]);

  const categories = ["All", "Web Development", "Mobile Development", "Design"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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

      {/* Filter buttons */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow border">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.client}</p>
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

              <div className="flex justify-between text-xs">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <span
                  className={`px-2 py-1 rounded-full ${
                    item.status === "Completed"
                      ? "bg-emerald-100 text-emerald-700"
                      : item.status === "In Progress"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                {new Date(item.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
