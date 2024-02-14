import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then((response) => {
      console.log("DATABASE CONNECTED SUCCESSFULLY !");
    })
    .catch((error) => {
      console.log("DATABASE CONNECTION FAILED");
      console.log(error);
    });
};

export default connectDatabase;
