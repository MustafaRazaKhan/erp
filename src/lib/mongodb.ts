// // utils/connectDb.ts
import mongoose from "mongoose";

let isConnected = false; // track connection

// const connectDB = async () => {
//   if (isConnected) return; // already connected

//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     isConnected = true;
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     console.error("MongoDB connection error:", error);
//     throw new Error("Could not connect to database");
//   }
// };

// export default connectDB;

// import mongoose from "mongoose";

// let isConnected = false;
if (process.env.NODE_ENV === "development") {
  const { setServers } = await import("node:dns/promises");

  setServers(["1.1.1.1", "8.8.8.8"]);
}

const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }

    console.log("Connecting to MongoDB...");

    const conn = await mongoose.connect(process.env.MONGO_URI);

    isConnected = true;

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("========== MONGODB ERROR ==========");
    console.error(error);
    console.error("===================================");

    throw error;
  }
};

export default connectDB;
