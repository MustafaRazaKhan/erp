import mongoose from "mongoose";

const classesSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    className: {
      type: String,
    },
    sectionName: {
      type: String,
    },
    roomNo: {
      type: Number,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const ClassesModel =
  mongoose.models.ClassesModel || mongoose.model("ClassesModel", classesSchema);
export default ClassesModel;
