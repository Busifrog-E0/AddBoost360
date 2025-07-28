import React from "react";
import { ArrowLeft } from "lucide-react";

const FormDetailsPage = ({ form, onBack }) => {
  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Full Submission Details
          </h1>
          <p className="text-gray-500 text-sm">Review all submitted fields</p>
        </div>
      </div>

      {/* Card Layout */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Detail label="Full name" value={form.FullName} />
          <Detail label="Email Address" value={form.Email} />
          <Detail label="Phone Number" value={form.Phone} />
          <Detail label="Choose Your Focus Area" value={form.FocusArea} />
          <Detail
            label="Business / Startup Name (if any)"
            value={form.BusinessName}
          />
          <Detail label="Preferred Date & Time" value={new Date(form.PreferredDate).toLocaleString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          })} />
        </div>

        <div className="mt-6">
          <p className="text-gray-600 font-semibold mb-1">
            Additional Notes or Questions:
          </p>
          <p className="text-gray-900 whitespace-pre-line">{form.Notes}</p>
        </div>
      </div>
    </div>
  );
};

// Reusable field component
const Detail = ({ label, value }) => (
  <div>
    <p className="text-gray-600 font-medium text-sm mb-1">{label}:</p>
    <p className="text-gray-900 font-semibold">{value || "—"}</p>
  </div>
);

export default FormDetailsPage;
