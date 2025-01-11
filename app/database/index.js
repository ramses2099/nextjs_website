import mongoose from "mongoose";
export default async function connectToDB() {
  try {
    await mongoose.connect("mongodb://root:pwd01@10.0.0.50:30070/");
    console.log("Databse connection successfully");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit the application with an error code
  }
}
