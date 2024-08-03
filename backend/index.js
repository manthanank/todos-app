const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todo");

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Define routes
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(cors());
app.use(bodyParser.json());

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
