import mongoose from "mongoose";

const connetToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONG_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connected to MongoDB failed", error.message);
  }
};

export default connetToMongoDB;
