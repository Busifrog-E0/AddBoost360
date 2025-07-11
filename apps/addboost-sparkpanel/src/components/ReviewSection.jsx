import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

import AddReview from "./AddReview";

const ReviewSection = () => {
  const [showeditReview, setShowEditReview] = useState(false);
  const [showAddReview, setShowAddReview] = useState(false);
  const [reviewToBeEdited, setReviewToBeEdited] = useState(null);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      designation: "Founder, StartupX",
      successStories:
        "TechNova helped us triple our revenue and enter global markets. Truly transformative experience!",
      imagePreview:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "CEO, InnovateNow",
      successStories:
        "From strategy to execution, their team was amazing. We expanded to 3 countries and raised our Series A.",
      imagePreview:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
  ]);

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
      setReviews((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const handleSave = (reviewData) => {
    if (reviewToBeEdited) {
      setReviews((prev) =>
        prev.map((r) =>
          r.id === reviewToBeEdited.id ? { ...r, ...reviewData } : r
        )
      );
    } else {
      setReviews((prev) => [
        ...prev,
        {
          ...reviewData,
          id: Date.now(),
        },
      ]);
    }
    setShowAddReview(false);
    setShowEditReview(false);
    setReviewToBeEdited(null);
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
        {reviews.map((review) => (
          <div
            key={review.id}
            className="relative bg-white border border-gray-200 rounded-xl shadow-sm p-6 pr-14 flex gap-4 items-start hover:shadow-md transition"
          >
            {/* Icons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => handleEdit(review)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => handleDelete(review.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* Content */}
            <img
              src={review.imagePreview}
              alt={review.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
            />
            <div className="flex-1">
              <p className="text-gray-700 text-sm italic mb-3 line-clamp-3">
                “{review.successStories}”
              </p>
              <div>
                <h2 className="text-md font-semibold text-gray-900">
                  {review.name}
                </h2>
                <p className="text-sm text-gray-500">{review.designation}</p>
              </div>
            </div>
          </div>
        ))}

        {reviews.length === 0 && (
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
