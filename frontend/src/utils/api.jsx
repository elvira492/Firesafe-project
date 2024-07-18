//hier werden wir Daten von unserem backend holen
// src/utils/api.js
const API_URL = "http://localhost:3001/reviews"; // URL für das Backend

export const createReview = async (review) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  return await response.json();
};

export const getReviews = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const updateReview = async (id, review) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  return await response.json();
};

export const deleteReview = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
