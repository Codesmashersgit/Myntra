const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const body = require("./Routes/Body");
const category = require("./Routes/Category");
const categorycart = require("./Routes/CategoriesCart");
const Winter = require("./Routes/Winter");
const saree = require("./Routes/Women/Saree");

app.use("/api/body", body);
app.use("/api/category", category);
app.use("/api/categorycart", categorycart);
app.use("/api/winter", Winter);
app.use("/api/women", saree);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
