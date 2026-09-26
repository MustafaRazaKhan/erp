import { Schema, model, models } from "mongoose";

const SchoolSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    code: {
      type: String,
      trim: true,
      uppercase: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    contact: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
      trim: true,
    },

    photo: {
      data: { type: Buffer, required: true },
      imageType: { type: String, required: true },
      name: { type: String },
    },
  },
  {
    timestamps: true,
  },
);

const School = models.School || model("School", SchoolSchema);

export default School;
