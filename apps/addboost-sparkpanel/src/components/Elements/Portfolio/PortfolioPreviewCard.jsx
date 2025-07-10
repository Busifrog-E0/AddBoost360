import React from "react";

const ProjectPreviewCard = ({ project }) => {
  const { title, impactPoints, type, linkToProject, buttonText, imagePreview } =
    project || {};

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 overflow-hidden w-full max-w-sm">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Preview</h2>
        <p className="text-sm text-gray-500">
          This is how your project card will appear
        </p>
      </div>

      {/* Image with Type overlay */}
      <div className="relative w-full mb-4">
        {imagePreview?.trim() ? (
          <>
            <img
              src={imagePreview}
              alt="Project"
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 bg-white px-3 py-1 rounded text-xs font-semibold text-gray-800 shadow z-10">
              {type?.trim() || "{{Project Type}}"}
            </div>
          </>
        ) : (
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm relative">
            Project Image
            <div className="absolute bottom-0 left-0 bg-white px-3 py-1 rounded text-xs font-semibold text-gray-800 shadow z-10">
              {type?.trim() || "{{Project Type}}"}
            </div>
          </div>
        )}
      </div>

      {/* Title */}
      <h2 className="text-base font-bold uppercase text-gray-900 mb-2">
        {title?.trim() || "{{Project Title}}"}
      </h2>

      {/* Achievements */}
      {impactPoints?.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-800 mb-1">Imapcts:</p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {impactPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      <button
        className="w-full border border-black text-sm font-medium px-4 py-2 uppercase hover:bg-black hover:text-white transition"
        onClick={() => window.open(linkToProject, "_blank")}
      >
        {buttonText?.trim() || "View Project"} →
      </button>
    </div>
  );
};

export default ProjectPreviewCard;
