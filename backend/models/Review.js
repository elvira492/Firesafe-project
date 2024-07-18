import mongoose from "mongoose";

// Erstellen eines Post-Schemas innerhalb des User-Schemas
const ReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
  },
  { timestamps: true }
);

// Erstellen des Review Models
const Review = mongoose.model("Review", ReviewSchema);
export default Review;
