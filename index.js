import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import messageRoutes from "./routes/message.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const CONNEECTION_URL = "mongodb://localhost:27017/gameo";

const PORT = process.env.PORT || 3000;

mongoose
  .connect(CONNEECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  );

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database connection is established");
});

app.use("/", messageRoutes);
app.use("/postmsg", messageRoutes);
