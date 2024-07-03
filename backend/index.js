const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connectDB = require("./Config/db");
const port = process.env.PORT || 5000;
const userRoutes = require("./Routes/userRoutes");
const taskRoutes = require("./Routes/taskRoutes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Welcome to the Server!");
});

app.get("/health", (req, res) => {
  res.json({
    service: "Pro Manage App Server",
    status: "Active",
    time: new Date(),
  });
});

app.use("/auth", userRoutes);
app.use("/task", taskRoutes);

app.listen(port, (err) => {
  if (!err) {
    console.log("Server is Up & is Running on the port: ", port);
  } else {
    console.log("Error while connecting to server");
  }
});
