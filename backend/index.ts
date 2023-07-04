// imports
import "dotenv/config";
import express from "express";

// sv express
const app = express();
app.get("/", (req, res) => {
  res.send("Hi!");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("app:", PORT);
});
