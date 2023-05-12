import mongoose from "mongoose";
mongoose
  .connect("mongodb://127.0.0.1:27017/mytube")
  .then(() => console.log("✅Connected to DB"))
  .catch((error) => console.log("❌ DB error : ", error));
