//hier werden wir Daten von unserem backend holen
// src/utils/api.js

const API_URL = "https://backend-firesafe.vercel.app"; //! URL für das Backend. soll aus .env(REACT_APP_BACKEND_URL=https://backend-firesafe.vercel.app) kommen, aber übernimmt nicht. bleibt direkt hier

export const createReview = async (review) => {
  const response = await fetch(`${API_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  return await response.json();
};

export const getReviews = async () => {
  const response = await fetch(`${API_URL}/reviews`);
  return await response.json();
};

export const updateReview = async (id, review) => {
  const response = await fetch(`${API_URL}/reviews/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  return await response.json();
};

export const deleteReview = async (id) => {
  const response = await fetch(`${API_URL}/reviews/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
