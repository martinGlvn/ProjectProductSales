// imports
import "dotenv/config";
import express from "express";
import routes from "./routes";
import connectDB from "./db/connect";

// sv express
const app = express();
// conectDB
connectDB();

app.use("/api", routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("app:", PORT);
});
