import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import useGetList from "../../hooks/api/useGetList";
import useDeleteData from "../../hooks/api/UseDeleteData";

import AddReview from "./AddReview";

const ReviewSection = () => {
  const [showeditReview, setShowEditReview] = useState(false);
  const [showAddReview, setShowAddReview] = useState(false);
  const [reviewToBeEdited, setReviewToBeEdited] = useState(null);
  const { deleteData } = useDeleteData({});

  const {
    data: testimonialss,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
  } = useGetList({ endpoint: "testimonialss" });

  const handleAdd = () => {
    setShowEditReview(false);
    setShowAddReview(true);
  };

  const handleEdit = (review) => {
    setReviewToBeEdited(review);
    setShowEditReview(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      deleteData({
        endpoint: `testimonialss/${id}`,
        onsuccess: (result) => {
          if (result) {
            handleSave();
          }
        },
      });
    }
  };

  const handleSave = () => {
    setShowAddReview(false);
    setShowEditReview(false);
    setReviewToBeEdited(null);
    getList([]);
  };

  const handleBack = () => {
    setShowAddReview(false);
    setShowEditReview(false);
    setReviewToBeEdited(null);
  };

  if (showAddReview) {
    return (
      <AddReview
        isEditing={false}
        title="Add New Review"
        description="Create a new review offering for your business"
        onBack={handleBack}
        onSave={handleSave}
      />
    );
  }

  if (showeditReview) {
    return (
      <AddReview
        isEditing={true}
        title="Edit Review"
        description="Edit the details of your existing review "
        onBack={handleBack}
        onSave={handleSave}
        initialValue={reviewToBeEdited}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Success Stories</h1>
          <p className="text-gray-600 mt-1">
            Manage reviews shared by your clients
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Review</span>
        </button>
      </div>

      {/* Review Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonialss.map((review) => (
          <div
            key={review.DocId}
            className="relative bg-white border border-gray-200 rounded-xl shadow-sm p-6 pr-14 flex gap-4 items-start hover:shadow-md transition"
          >
            {/* Top Right Icons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => handleEdit(review)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => handleDelete(review.DocId)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* Review Image */}
            <img
              src={review.ImageUrl}
              alt={review.Title}
              className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
            />

            {/* Review Content */}
            <div className="flex-1">
              <p className="text-gray-700 text-sm italic mb-3 line-clamp-3">
                “{review.Description1}”
              </p>
              <div>
                <h2 className="text-md font-semibold text-gray-900">
                  {review.Title}
                </h2>
                <p className="text-sm text-gray-500">{review.Designation}</p>

                {/* Priority below Designation */}
                {review.Priority && (
                  <span className="mt-1 inline-block bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full ml-0">
                    Priority: {review.Priority}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {testimonialss.length === 0 && (
          <div className="text-center py-12 col-span-2">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No reviews added
            </h3>
            <p className="text-gray-500 mb-4">
              Get started by adding your first customer review.
            </p>
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
