require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/notes");
const client = require("./configs/db");
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;

client.connect((err) => {
  if (err) {
    // console.log("inside error")
    console.log(err);
  }
  console.log("Connected to database!");
});

app.get("/", (req, res) => {
  res.status(200).send("server is upp and running");
});

app.use("/auth", authRoutes);
app.use("/note", noteRoutes);

app.listen(port, () => {
  console.log("hello");
});
