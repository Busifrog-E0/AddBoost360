import React, { useState } from "react";
import { Edit, Save, X, MapPin, Phone, Mail, Globe } from "lucide-react";

const AboutSection: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutData, setAboutData] = useState({
    companyName: "Creative Digital Agency",
    tagline: "Transforming ideas into digital reality",
    description:
      "We are a full-service digital agency specializing in web development, mobile applications, and digital marketing. With over 8 years of experience, we have helped businesses of all sizes achieve their digital goals through innovative solutions and exceptional service.",
    mission:
      "To empower businesses with cutting-edge digital solutions that drive growth and create lasting impact.",
    vision:
      "To be the leading digital transformation partner for businesses worldwide.",
    founded: "2016",
    employees: "25+",
    projectsCompleted: "500+",
    clientSatisfaction: "98%",
    contact: {
      address: "123 Innovation Street, Tech City, TC 12345",
      phone: "+1 (555) 123-4567",
      email: "hello@creativedigital.com",
      website: "www.creativedigital.com",
    },
  });

  const [editData, setEditData] = useState(aboutData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(aboutData);
  };

  const handleSave = () => {
    setAboutData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(aboutData);
    setIsEditing(false);
  };

  const teamMembers = [
    {
      id: 1,
      name: "John Anderson",
      role: "CEO & Founder",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Visionary leader with 10+ years in digital transformation",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Technology expert specializing in scalable solutions",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Lead Designer",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Creative designer with passion for user experience",
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "Marketing Director",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Digital marketing strategist driving growth",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">About Us</h1>
          <p className="text-gray-600 mt-1">Manage your company information</p>
        </div>
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Edit className="w-4 h-4" />
            <span>Edit Info</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>

      {/* Company Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Company Overview
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.companyName}
                onChange={(e) =>
                  setEditData({ ...editData, companyName: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900">{aboutData.companyName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tagline
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.tagline}
                onChange={(e) =>
                  setEditData({ ...editData, tagline: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-600 italic">{aboutData.tagline}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            {isEditing ? (
              <textarea
                value={editData.description}
                onChange={(e) =>
                  setEditData({ ...editData, description: e.target.value })
                }
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-600 leading-relaxed">
                {aboutData.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Our Mission
          </h3>
          {isEditing ? (
            <textarea
              value={editData.mission}
              onChange={(e) =>
                setEditData({ ...editData, mission: e.target.value })
              }
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-600 leading-relaxed">{aboutData.mission}</p>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Our Vision
          </h3>
          {isEditing ? (
            <textarea
              value={editData.vision}
              onChange={(e) =>
                setEditData({ ...editData, vision: e.target.value })
              }
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-600 leading-relaxed">{aboutData.vision}</p>
          )}
        </div>
      </div>

      {/* Company Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Company Statistics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {aboutData.founded}
            </div>
            <div className="text-sm text-gray-600">Founded</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">
              {aboutData.employees}
            </div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {aboutData.projectsCompleted}
            </div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {aboutData.clientSatisfaction}
            </div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">Address</p>
                <p className="text-gray-600">{aboutData.contact.address}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">Phone</p>
                <p className="text-gray-600">{aboutData.contact.phone}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">Email</p>
                <p className="text-gray-600">{aboutData.contact.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">Website</p>
                <p className="text-gray-600">{aboutData.contact.website}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="font-semibold text-gray-900">{member.name}</h4>
              <p className="text-sm text-blue-600 mb-2">{member.role}</p>
              <p className="text-xs text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
