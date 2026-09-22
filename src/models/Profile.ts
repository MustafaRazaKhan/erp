import mongoose, { Model, Schema } from "mongoose";

/* =========================================================
   SCHEMA
========================================================= */

const profileSchema = new Schema(
  {
    /* =====================================================
       USER
    ===================================================== */

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },

    /* =====================================================
       ROLE
    ===================================================== */

    role: {
      type: String,
      enum: ["teacher", "class_teacher", "library"],
      required: true,
      index: true,
    },

    /* =====================================================
       IDENTITY
    ===================================================== */

    employeeId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
      index: true,
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    dob: {
      type: Date,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    /* =====================================================
       CONTACT
    ===================================================== */

    phone: {
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

    /* =====================================================
       EMPLOYMENT
    ===================================================== */

    joiningDate: {
      type: Date,
    },

    employmentType: {
      type: String,
      enum: ["Permanent", "Contract", "Part Time"],
    },

    /* =====================================================
       PROFESSIONAL
    ===================================================== */

    qualification: {
      type: String,
      trim: true,
    },

    specialization: {
      type: String,
      trim: true,
    },

    experience: {
      type: String,
      trim: true,
    },

    department: {
      type: String,
      trim: true,
    },

    subjects: {
      type: String,
      trim: true,
    },

    /* =====================================================
       CLASS TEACHER
    ===================================================== */

    classId: {
      type: Schema.Types.ObjectId,
      ref: "Class",
      default: null,
    },
    className: {
      type: String,
    },
    classSection: {
      type: String,
    },

    /* =====================================================
       LIBRARIAN
    ===================================================== */

    libraryExperience: {
      type: String,
      trim: true,
    },

    /* =====================================================
       SALARY / HR
    ===================================================== */

    salary: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    salaryType: {
      type: String,
      enum: ["Monthly", "Yearly"],
      default: "Monthly",
    },

    totalLeavesAllowed: {
      type: Number,
      min: 0,
      default: 12,
    },

    totalLeavesAvailed: {
      type: Number,
      min: 0,
      default: 0,
    },

    /* =====================================================
       ADDRESS
    ===================================================== */

    address: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
      trim: true,
    },

    state: {
      type: String,
      trim: true,
    },

    pincode: {
      type: String,
      trim: true,
    },

    /* =====================================================
       NOTES
    ===================================================== */

    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

/* =========================================================
   MODEL
========================================================= */

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;
