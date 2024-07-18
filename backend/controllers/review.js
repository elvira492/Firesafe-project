import Review from "../models/Review.js";

// index.js (Error Handling Middleware)
/* app.use((err, req, res, next) => {
  console.error("Error handled by middleware:", err);
  res.status(500).json({ message: "Internal Server Error" });
}); */

// Create Review
export const createReview = async (req, res, next) => {
  try {
    const { name, text, rating } = req.body;
    const newReview = new Review({ name, text, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};

// Get All Reviews
export const getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

// Update Review
export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, text, rating } = req.body;

    if (!name || !text || !rating) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { name, text, rating },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json(updatedReview);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete Review
export const deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = await Review.findByIdAndDelete(id);
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};
