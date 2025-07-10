import React, { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import AddTeamPage from "./AddTeamPage";

const TeamSection = () => {
  const [showAddTeam, setShowAddTeam] = useState(false);
  const [showEditTeam, setShowEditTeam] = useState(false);
  const [memberToBeEdited, setMemberToBeEdited] = useState(null);

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      title: "John Smith",
      designation: "CTO",
      country: "California, USA",
      imagePreview:
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg", // New image for John
    },
    {
      id: 2,
      title: "Meera Varma",
      designation: "Product Manager",
      country: "New Delhi, India",
      imagePreview:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg", // New image for Meera
    },
    {
      id: 3,
      title: "Carlos Ruiz",
      designation: "UX Designer",
      country: "Barcelona, Spain",
      imagePreview:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      id: 4,
      title: "Aiko Tanaka",
      designation: "Software Engineer",
      country: "Tokyo, Japan",
      imagePreview:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
    },
    {
      id: 5,
      title: "James Lee",
      designation: "Marketing Director",
      country: "New York, USA",
      imagePreview:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      id: 6,
      title: "Fatima Al-Fulan",
      designation: "HR Specialist",
      country: "Dubai, UAE",
      imagePreview:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      id: 7,
      title: "Arjun Patel",
      designation: "Cloud Architect",
      country: "Bengaluru, India",
      imagePreview:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    },
    {
      id: 8,
      title: "Isabella Rossi",
      designation: "Legal Advisor",
      country: "Milan, Italy",
      imagePreview:
        "https://images.pexels.com/photos/206452/pexels-photo-206452.jpeg",
    },
    {
      id: 9,
      title: "Sofia Nguyen",
      designation: "Data Scientist",
      country: "Ho Chi Minh City, Vietnam",
      imagePreview:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
    {
      id: 10,
      title: "Liam O'Connor",
      designation: "Finance Manager",
      country: "Dublin, Ireland",
      imagePreview:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  ]);

  const handleAddMember = () => {
    setMemberToBeEdited(null);
    setShowAddTeam(true);
  };

  const handleEditMember = (member) => {
    setMemberToBeEdited(member);
    setShowEditTeam(true);
  };

  const handleDeleteMember = (id) => {
    if (window.confirm("Are you sure you want to delete this team member?")) {
      setTeamMembers((prev) => prev.filter((member) => member.id !== id));
    }
  };

  const handleSaveMember = (memberData) => {
    if (memberToBeEdited) {
      setTeamMembers((prev) =>
        prev.map((member) =>
          member.id === memberToBeEdited.id
            ? { ...member, ...memberData }
            : member
        )
      );
    } else {
      const newMember = { ...memberData, id: Date.now() };
      setTeamMembers((prev) => [...prev, newMember]);
    }
    setShowAddTeam(false);
    setMemberToBeEdited(null);
    setShowEditTeam(false);
  };

  const handleBack = () => {
    setShowAddTeam(false);
    setMemberToBeEdited(null);
    setShowEditTeam(false);
  };

  if (showAddTeam) {
    return <AddTeamPage onBack={handleBack} onSave={handleSaveMember} />;
  }

  if (showEditTeam) {
    return (
      <AddTeamPage
        isEditing={true}
        onBack={handleBack}
        onSave={handleSaveMember}
        initialValue={memberToBeEdited}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team</h1>
          <p className="text-gray-600 mt-1">Manage your team members</p>
        </div>
        <button
          onClick={handleAddMember}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Member</span>
        </button>
      </div>

      {/* Team Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-200 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-700">
                  Team
                </th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">
                  Designation
                </th>
                <th className="text-center py-4 px-6 font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {teamMembers.map((member) => (
                <tr
                  key={member.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* Member Info with Image */}
                  <td className="py-3 px-5">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={member.imagePreview}
                          alt={member.title}
                          className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-semibold text-gray-900">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Designation */}
                  <td className="py-4 px-6">
                    <p
                      className="text-sm text-gray-700 leading-relaxed max-w-md"
                      title={member.designation}
                    >
                      {member.designation}
                    </p>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleEditMember(member)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit member"
                      >
                        <Edit className="w-5 h-5" />
                      </button>

                      <button
                        onClick={() => handleDeleteMember(member.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete member"
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
        {teamMembers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No team members yet
            </h3>
            <p className="text-gray-500 mb-4">
              Get started by adding your first team member.
            </p>
            <button
              onClick={handleAddMember}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Your First Member
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
