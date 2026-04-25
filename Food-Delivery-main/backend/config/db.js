import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.MONGO_URL) {
    console.log("MONGO_URL not set; starting without database connection.");
    return;
  }
  await mongoose
    .connect(
      process.env.MONGO_URL
    )
    .then(() =>console.log("DB Connected"));
};
