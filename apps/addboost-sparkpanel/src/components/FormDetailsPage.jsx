import React from "react";
import { ArrowLeft } from "lucide-react";

const FormDetailsPage = ({ form, onBack }) => {
  return (
    <div className="p-6 space-y-6">
      {/* Back Button and Title */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">
          Full Submission Details
        </h1>
      </div>

      {/* Details Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
        <div>
          <p className="text-gray-600 font-semibold">Name:</p>
          <p className="text-gray-900">{form.name}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Email:</p>
          <p className="text-gray-900">{form.email}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Phone Number:</p>
          <p className="text-gray-900">{form.phoneNumber}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Area:</p>
          <p className="text-gray-900">{form.area}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Startup:</p>
          <p className="text-gray-900">{form.startup}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Comments:</p>
          <p className="text-gray-900">{form.comments}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Submitted At:</p>
          <p className="text-gray-900">{form.submittedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default FormDetailsPage;
