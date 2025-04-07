
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
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
app.use(cors());

app.use('/api/auth/send-otp', otpLimiter);
app.post('/api/auth/send-otp', otpController.sendOtp); // Use OTP controller for sending OTP
app.post('/api/auth/verify-otp', otpController.verifyOtp); // Use OTP controller for verifying OTP

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
