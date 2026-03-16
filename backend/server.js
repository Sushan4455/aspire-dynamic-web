require("dotenv").config();
const express = require("express");
const cors = require("cors");
const blogRoutes = require("./routes/blog.routes");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/api/blogs", blogRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
