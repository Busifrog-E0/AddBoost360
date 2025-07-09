import React, { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import AddTeamPage from "./AddTeamPage";

const TeamSection = () => {
  const [showAddTeam, setShowAddTeam] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      title: "John Doe",
      designation: "Frontend Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XsQ4BAn4O19F6hU1y4J16nLoICbVLOnAog&s",
    },
    {
      id: 2,
      title: "swapna",
      designation: "Frontend Developer",
      image:
        "data:image/jpeg;base64,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",
    },
  ]);

  const handleAddMember = () => {
    setEditingMember(null);
    setShowAddTeam(true);
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
    setShowAddTeam(true);
  };

  const handleDeleteMember = (id) => {
    if (window.confirm("Are you sure you want to delete this team member?")) {
      setTeamMembers((prev) => prev.filter((member) => member.id !== id));
    }
  };

  const handleSaveMember = (memberData) => {
    if (editingMember) {
      setTeamMembers((prev) =>
        prev.map((member) =>
          member.id === editingMember.id ? { ...member, ...memberData } : member
        )
      );
    } else {
      const newMember = { ...memberData, id: Date.now() };
      setTeamMembers((prev) => [...prev, newMember]);
    }
    setShowAddTeam(false);
    setEditingMember(null);
  };

  const handleBack = () => {
    setShowAddTeam(false);
    setEditingMember(null);
  };

  if (showAddTeam) {
    return (
      <AddTeamPage
        onBack={handleBack}
        onSave={handleSaveMember}
        initialData={editingMember}
        isEditing={!!editingMember}
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
                          src={member.image}
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
