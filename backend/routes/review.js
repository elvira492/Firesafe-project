import { Router } from "express";
import {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
} from "../controllers/review.js";

const router = new Router();

//thunderclient: http://localhost:3001/reviews/
// Create review
router.post("/", createReview);

// Get all reviews
router.get("/", getAllReviews);

//thunderclient: http://localhost:3001/reviews/669621b09d4477c1c6edf5d8
// Update review
router.put("/:id", updateReview);

// Delete review
router.delete("/:id", deleteReview);

//test Error Handling
router.get("/test-error", (req, res, next) => {
  try {
    throw new Error("Test Error");
  } catch (error) {
    console.error("Caught error:", error); // fangen den Fehler
    next(error); // Fehler an die Error Handling Middleware weitergeben in index.js in backend
  }
});

export default router;
