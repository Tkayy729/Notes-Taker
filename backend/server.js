const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");
const ConnectDB = require("./config/db");
const UserRoute = require("./routes/userRoute");
const NoteRoute = require("./routes/noteRoute");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
app.use(express.json());
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


app.use("/api/users", UserRoute);
app.use("/api/notes", NoteRoute);

app.use(notFound);
app.use(errorHandler);
