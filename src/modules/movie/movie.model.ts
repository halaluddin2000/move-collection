import { model, Schema } from "mongoose";
import { TMovie, TReview } from "./movie.interface";

const reviewSchema = new Schema<TReview>({
  email: {
    type: String,
    required: [true, "Email is required "],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required "],
  },
  comment: {
    type: String,
    required: [true, "Comment is required "],
  },
});

const movieSchema = new Schema<TMovie>({
  title: {
    type: String,
    required: [true, "Title is required "],
  },
  description: {
    type: String,
    required: [true, "description is required "],
  },
  genre: {
    type: String,
    required: [true, "genre is required "],
  },
  reviews: {
    type: [reviewSchema],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  slug: {
    type: String,
    required: [true, "Slug is required "],
  },
});
export const Movie = model<TMovie>("Movie", movieSchema);
