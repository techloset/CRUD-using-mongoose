import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.DATABASE_URL || "");
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.log(error.message);
  }
};

export default connectMongoDB;
