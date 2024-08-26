import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getReviews, deleteReview } from "../utils/api.jsx";
import "../styles/ReviewList.css";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const reviews = await getReviews();
    setReviews(reviews);
  };

  const handleDelete = async (id) => {
    await deleteReview(id);
    fetchReviews();
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="review-container max-w-5xl">
      <h1 className="underline">Bewertungen</h1>
      <ul className="review-list">
        {reviews.map((review) => (
          <li key={review._id}>
            <h3>{review.name}</h3>
            <p>{review.text}</p>
            <p className="rating">Bewertung: {review.rating}</p>
            <button
              className="update-button"
              onClick={() => handleUpdate(review._id)}
            >
              Ändern
            </button>
            <button
              className="update-button"
              onClick={() => handleDelete(review._id)}
            >
              Löschen
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
