const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
var cors = require("cors");
const ConnectDB = require("./config/db");

const app = express();
dotenv.config();
ConnectDB();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.listen(PORT, () => {
  console.log("server is running on port 5000");
});

app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
