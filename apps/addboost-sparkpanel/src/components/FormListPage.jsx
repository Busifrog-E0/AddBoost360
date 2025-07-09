import React, { useState } from "react";
import { Eye } from "lucide-react";
import FormDetailsPage from "./FormDetailsPage";

const FormListPage = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  const formSubmissions = [
    {
      id: 1,
      area: "Mumbai",
      name: "Swapna",
      email: "swapna103@example.com",
      phoneNumber: "9876543210",
      startup: "TechieStart",
      comments: "Looking for early-stage funding support.",
      submittedAt: "2025-07-09 10:30 AM",
    },
    {
      id: 2,
      area: "Bangalore",
      name: "Arjun Das",
      email: "arjun@startuphub.com",
      phoneNumber: "9999988888",
      startup: "Epoq Zeo Private Ltd",
      comments: "Interested in mentorship programs.",
      submittedAt: "2025-07-09 11:00 AM",
    },
  ];

  if (selectedForm) {
    return (
      <FormDetailsPage
        form={selectedForm}
        onBack={() => setSelectedForm(null)}
      />
    );
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold text-gray-900">Form Submissions</h1>
      <p className="text-gray-600">View basic info of all submissions</p>

      <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4 text-gray-700">Name</th>
              <th className="text-left py-3 px-4 text-gray-700">Email</th>
              <th className="text-left py-3 px-4 text-gray-700">Phone</th>
              <th className="text-center py-3 px-4 text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {formSubmissions.map((form) => (
              <tr key={form.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">{form.name}</td>
                <td className="py-3 px-4">{form.email}</td>
                <td className="py-3 px-4">{form.phoneNumber}</td>
                <td className="py-3 px-4">
                  <div className="flex justify-center">
                    <button
                      onClick={() => setSelectedForm(form)}
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Full Details</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {formSubmissions.length === 0 && (
          <div className="text-center p-8 text-gray-500">
            No submissions yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default FormListPage;
