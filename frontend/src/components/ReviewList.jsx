import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getReviews, deleteReview } from "../utils/api.jsx";

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
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <h3>{review.name}</h3>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
            <button onClick={() => handleUpdate(review._id)}>Update</button>
            <button onClick={() => handleDelete(review._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
