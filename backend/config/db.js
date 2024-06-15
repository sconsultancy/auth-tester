import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB COnnected ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message, "Error");
    process.exit(1);
  }
};

export default connectDB;
