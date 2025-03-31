import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connect() {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("mongoDB is connected!"))
    .catch((err) => console.log(err));
}
mongoose.connection.on("error", () => {
  console.log("mongoDB connect is failed");
});
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB is disconnected");
  connect();
});

export default connect;
