import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const EnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    comment: {
      type: String,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      default: "pending",
      enum: ["pending", "completed"],
    },
  },
  {
    timestamps: true,
  },
);

EnquirySchema.plugin(mongoosePaginate);

const Enquiry =
  (mongoose.models.Enquiry as mongoose.PaginateModel<any>) ||
  mongoose.model<any, mongoose.PaginateModel<any>>("Enquiry", EnquirySchema);

export default Enquiry;
