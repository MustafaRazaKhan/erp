import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    itemCode: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    // Stock details
    quantity: {
      type: Number,
      default: 0,
      min: 0,
    },

    minimumStock: {
      type: Number,
      default: 0,
      min: 0,
    },

    unit: {
      type: String,
      default: "pcs",
    },

    price: {
      type: Number,
      default: 0,
      min: 0,
    },

    location: {
      type: String,
      trim: true,
    },

    // Supplier details
    supplier: {
      name: String,
      phone: String,
      email: String,
    },

    // Stock history
    stockIn: [
      {
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        invoiceNo: String,
        price: Number,
        remarks: String,
      },
    ],

    stockOut: [
      {
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        issuedTo: String,
        department: String,
        purpose: String,
        remarks: String,
      },
    ],

    // Asset details
    isAsset: {
      type: Boolean,
      default: false,
    },

    asset: {
      assetCode: String,
      serialNumber: String,
      assignedTo: String,
      condition: {
        type: String,
        enum: ["new", "good", "fair", "damaged"],
        default: "new",
      },
      purchaseDate: Date,
      warrantyEndDate: Date,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "damaged", "lost"],
      default: "active",
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

inventorySchema.index({ schoolId: 1, itemCode: 1 }, { unique: true });

export default mongoose.model("Inventory", inventorySchema);
