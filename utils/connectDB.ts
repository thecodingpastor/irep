import mongoose from "mongoose";

const connectDB = async () => {
  const connectionString =
    process.env.NODE_ENV !== "production"
      ? process.env.LOCAL_MONGO_URI
      : process.env.LIVE_MONGO_URI;

  console.log("LOCAL => ", process.env.LOCAL_MONGO_URI);
  console.log("LIVE => ", process.env.LIVE_MONGO_URI);
  console.log("NODE_ENV => ", process.env.NODE_ENV);
  console.log("CONNECTION STRING: ", connectionString);
  console.log("ENVIRONMENT => ", process.env);

  mongoose.set("strictQuery", false);
  return mongoose
    .connect(connectionString)
    .then(() => {
      console.log("DB Connection Successful");
    })
    .catch((err) => console.error(err));
};

export default connectDB;
