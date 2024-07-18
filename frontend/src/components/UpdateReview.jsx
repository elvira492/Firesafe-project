import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateReview, getReviews } from "../utils/api.jsx";
import "../styles/UpdateReview.css";

const UpdateReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState({ name: "", text: "", rating: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReview = async () => {
      const reviews = await getReviews();
      const reviewToUpdate = reviews.find((review) => review._id === id);
      if (reviewToUpdate) {
        setReview(reviewToUpdate);
      }
    };
    fetchReview();
  }, [id]);

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateReview(id, review);
    navigate("/about-us");
  };

  return (
    <div className="form-container">
      <h1>Ändern Sie Ihre Bewertung</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={review.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Text:</label>
          <textarea name="text" value={review.text} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Bewertung:</label>
          <input
            type="number"
            name="rating"
            value={review.rating}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <button type="submit" className="update-button">
          Ändern
        </button>
      </form>
    </div>
  );
};

export default UpdateReview;
