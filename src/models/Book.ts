import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    isbn: {
      type: String,
      trim: true,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    publisher: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      trim: true,
    },

    language: {
      type: String,
      default: "English",
      trim: true,
    },

    edition: {
      type: String,
      trim: true,
    },

    publicationYear: {
      type: Number,
    },

    pages: {
      type: Number,
      min: 1,
    },

    price: {
      type: Number,
      default: 0,
      min: 0,
    },

    shelf: {
      type: String,
      trim: true,
    },

    totalCopies: {
      type: Number,
      default: 1,
      min: 0,
    },

    availableCopies: {
      type: Number,
      default: 1,
      min: 0,
    },

    issuedCopies: {
      type: Number,
      default: 0,
      min: 0,
    },

    description: {
      type: String,
      trim: true,
    },

    coverImage: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["available", "unavailable", "lost", "damaged"],
      default: "available",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

bookSchema.index({ schoolId: 1, isbn: 1 });

export default mongoose.model("Book", bookSchema);
