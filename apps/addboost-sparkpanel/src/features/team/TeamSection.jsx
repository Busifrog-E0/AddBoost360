import React, { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import AddTeamPage from "./AddTeamPage";
import useGetList from "../../hooks/api/useGetList";
import useDeleteData from "../../hooks/api/UseDeleteData";

const TeamSection = () => {
  const [showAddTeam, setShowAddTeam] = useState(false);
  const [showEditTeam, setShowEditTeam] = useState(false);
  const [memberToBeEdited, setMemberToBeEdited] = useState(null);
  const { deleteData } = useDeleteData({});

  const {
    data: employees,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
  } = useGetList({ endpoint: "employees" });

  const handleAddMember = () => {
    setMemberToBeEdited(null);
    setShowAddTeam(true);
  };

  const handleEditMember = (member) => {
    setMemberToBeEdited(member);
    setShowEditTeam(true);
  };

  const handleDeleteMember = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      deleteData({
        endpoint: `employees/${id}`,
        onsuccess: (result) => {
          if (result) {
            handleSaveMember();
          }
        },
      });
    }
  };

  const handleSaveMember = () => {
    setShowAddTeam(false);
    setMemberToBeEdited(null);
    setShowEditTeam(false);
    getList([]);
  };

  const handleBack = () => {
    setShowAddTeam(false);
    setMemberToBeEdited(null);
    setShowEditTeam(false);
  };

  if (showAddTeam) {
    return (
      <AddTeamPage
        isEditing={false}
        title=" Add new team member"
        description="create a new team member"
        onBack={handleBack}
        onSave={handleSaveMember}
      />
    );
  }

  if (showEditTeam) {
    return (
      <AddTeamPage
        title="Edit team member"
        description="Edit the details of your existing team member"
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
              {employees.map((member) => (
                <tr
                  key={member.DocId}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* Member Info with Image */}
                  <td className="py-3 px-5">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={member.ImageUrl}
                          alt={member.FullName}
                          className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-semibold text-gray-900">
                          {member.FullName}
                          <p>
                            {" "}
                            {member.Priority && (
                              <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-600 rounded-full">
                                Priority: {member.Priority}
                              </span>
                            )}
                          </p>
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Designation */}
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-700 leading-relaxed max-w-md">
                      {member.Designation}
                    </p>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleEditMember(member)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit member"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteMember(member.DocId)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
        {employees.length === 0 && (
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

        {/* Load More Button */}
        {!isPageDisabled && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => getList(employees, false)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60"
              disabled={isLoadingMore}
            >
              {isLoadingMore ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                  />
                </svg>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
