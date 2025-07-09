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
      title: "DIGITAL MARKETING & GROWTH CAMPAIGNS",
      subtitle: "Our Services Include:",
      description:
        "Turn Clicks into Clients. Globally. Effectively. We drive traffic, leads, and conversions through proven, ROI-focused strategies.",
      buttonText: "LET'S GROW YOUR AUDIENCE",
      imagePreview: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Search Engine Optimization (SEO)",
        "Paid Media (PPC/Google Ads)",
        "Social Media Marketing (Facebook, Instagram, TikTok, LinkedIn)",
        "Influencer & Affiliate Campaigns",
        "Content Strategy & Blogging",
        "Marketing Automation",
      ],
    },
    {
      id: 2,
      title: "WEBSITE DEVELOPMENT & E-COMMERCE SOLUTIONS",
      subtitle: "We Offer:",
      description:
        "Websites That Work - Beautiful, Functional, and Fast. We design, develop, and maintain secure, scalable, and high-converting websites.",
      buttonText: "BUILD MY WEBSITE NOW",
      imagePreview: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Business Websites & Landing Pages",
        "E-Commerce & WebCommerce Stores",
        "Catalog & Portfolio Sites",
        "Mobile-Optimized SEO-First-Design Development",
        "Payment Gateway Integration",
        "Hosting, Maintenance & Cybersecurity",
      ],
    },
    {
      id: 3,
      title: "AI & SMART TECH INTEGRATION",
      subtitle: "Our AI Services:",
      description:
        "Smarter Workflows. Instant Engagement. Powerful Insights. Automate, optimize, and scale your operations using advanced AI solutions.",
      buttonText: "GET AI WORKING FOR YOU",
      imagePreview: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Chatbot Development",
        "AI-Powered Analytics",
        "Predictive Algorithms for Marketing & Sales",
        "Automation Pipelines",
        "AI Tools for Content & Campaign Creation",
        "CRM & Analytics Integration",
      ],
    },
    {
      id: 4,
      title: "BRANDING & CREATIVE IDENTITY",
      subtitle: "What We Deliver:",
      description:
        "Design That Inspires Trust and Loyalty. We help you stand out with a brand that reflects who you are and what you believe in.",
      buttonText: "CRAFT MY BRAND IDENTITY",
      imagePreview: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Logo Design",
        "Visual Identity (Color, Fonts, Icons, Templates)",
        "Social Media Branding",
        "Visual Strategy & Direction",
        "Packaging & Promotional Assets",
      ],
    },
    {
      id: 5,
      title: "STARTUP PRODUCT SOURCING & ESCROW SERVICES",
      subtitle: "Includes:",
      description:
        "Launch Your Store with Confidence. We handle the rest. We support startups with sourcing, supplier negotiation, and purchase management.",
      buttonText: "SOURCE PRODUCTS SAFELY",
      imagePreview: "https://images.pexels.com/photos/4483776/pexels-photo-4483776.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Global Wholesale Product Sourcing (China, India, UAE, etc.)",
        "Verified Suppliers: Marketplace Verified Connections",
        "Secure Supplier Matching + Final Selection",
        "Logistics Coordination + Flexible dispatch or even delivery",
        "Custom Contracts with Suppliers on Quality & Protection",
        "Free One-Month Marketing Support (with Full Package)",
      ],
    },
    {
      id: 6,
      title: "DIGITAL MARKETING TRAINING & EMPOWERMENT",
      subtitle: "Available Trainings:",
      description:
        "Learn From Experts. Take Control of Your Digital Future. We provide hands-on training for corporations, teams, and freelancers.",
      buttonText: "BUILD MY WEBSITE NOW",
      imagePreview: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Masterclasses in SEO, social media, Email Marketing",
        "Live Projects Through Applications (Canva, Meta Ads, etc.)",
        "Customized Team Workshops",
        "Ongoing Support & Mentorship",
      ],
    },
    {
      id: 7,
      title: "FREELANCER NETWORK & OUTSOURCING PROGRAM",
      subtitle: "Two Categories:",
      description:
        "Top Talent. Global Reach. On Your Terms. We match businesses with high-performing freelancers or train their in-house team.",
      buttonText: "LET'S GROW YOUR AUDIENCE",
      imagePreview: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Remote Freelancers: Developers, Designers, SEO Experts, Marketers",
        "Internship Talent: Young professionals with core tech & digital tools",
      ],
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
