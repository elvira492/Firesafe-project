import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createReview } from "../utils/api.jsx";
import "../styles/CreateReview.css";

const CreateReview = () => {
  const [review, setReview] = useState({ name: "", text: "", rating: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    await createReview(review);
    navigate("/reviews");
  };

  return (
    <div className="form-container">
      <h1>Erstelle Bewertung</h1>
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
        <button type="submit" className="submit-button">
          Senden
        </button>
      </form>
    </div>
  );
};

export default CreateReview;
