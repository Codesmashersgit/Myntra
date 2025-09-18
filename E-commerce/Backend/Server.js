
require("dotenv").config();
const express = require("express");
const app = express();

const rateLimit = require("express-rate-limit"); // For rate limiting
const otpController = require('./Controllers/OtpController');

const port = process.env.PORT;
 // Import the OTP controller


// Rate limiter for OTP requests
const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many requests, please try again later.',
});


app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use('/api/auth/send-otp', otpLimiter);
app.post('/api/auth/send-otp', otpController.sendOtp); // Use OTP controller for sending OTP
app.post('/api/auth/verify-otp', otpController.verifyOtp); // Use OTP controller for verifying OTP

const home= require("./Routes/Home");
const category = require("./Routes/Category");
const categorycart = require("./Routes/CategoriesCart");
const saree = require("./Routes/Women/Saree");


app.use("/api", home);
app.use("/api", category);
app.use("/api", categorycart);
app.use("/api/women", saree);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
