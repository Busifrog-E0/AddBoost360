import React from "react";

const ServicePreviewCard = ({ service }) => {
  const {
    Title,
    Description2,
    Description1,
    ServiceList,
    ButtonMessage1,
    ImageUrl,
    images,
  } = service || {};

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 overflow-hidden">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Preview</h2>
        <p className="text-sm text-gray-500">
          This is how your service card will appear
        </p>
      </div>

      {/* Image */}
      <div className="w-full mb-4">
        {ImageUrl && ImageUrl.length > 0 && ImageUrl[0]?.trim() ? (
          <img
            src={ImageUrl[0]}
            alt="Service"
            className="w-full aspect-video object-cover rounded-md"
          />
        ) :
          (images && images.length > 0) ?
            <img
              src={URL.createObjectURL(new Blob([new Uint8Array(images[0].FileData)], { type: "image/jpeg" }))}
              alt="Service"
              className="w-full aspect-video object-cover rounded-md"
            />
            : (
              <div className="w-full aspect-video bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm">
                {"Service Image"}
              </div>
            )}
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold uppercase text-gray-900 mb-2">
        {Title?.trim() || "{{Service Title}}"}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">
        {Description2?.trim() || "{{Service Description}}"}
      </p>

      {/* Subtitle */}
      <p className="font-semibold text-gray-800 mb-2">
        {" "}
        {Description1?.trim() || "{{Service Subtitle}}"}
      </p>

      {/* Services List */}
      <div>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          {ServiceList?.length > 0 ? (
            ServiceList.map((item, idx) => (
              <li key={idx}>{item?.trim() || ``}</li>
            ))
          ) : (
            <li key="default">{""}</li>
          )}
        </ul>
      </div>

      {/* CTA Button */}
      <button className="mt-6 w-full border border-black text-sm font-medium px-4 py-2 uppercase hover:bg-black hover:text-white transition">
        {ButtonMessage1?.trim() || "{{Call-to-Action Button Text}}"} →
      </button>
    </div>
  );
};

export default ServicePreviewCard;
