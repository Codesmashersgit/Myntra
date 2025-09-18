
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

// app.use('/api/auth/send-otp', otpLimiter);
// app.post('/api/auth/send-otp', otpController.sendOtp); // Use OTP controller for sending OTP
// app.post('/api/auth/verify-otp', otpController.verifyOtp); // Use OTP controller for verifying OTP

// const app = express();
// app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(bodyParser.json());

const otpStore = {}; // simple in-memory store { phoneNumber: otp }

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP
}

app.post('/api/auth/send-otp', (req, res) => {
  const { phoneNumber } = req.body;
  if (!phoneNumber || !phoneNumber.startsWith('+91') || phoneNumber.length !== 13) {
    return res.status(400).json({ message: 'Invalid phone number' });
  }

  const otp = generateOtp();
  otpStore[phoneNumber] = otp;
  console.log(`OTP for ${phoneNumber} is ${otp}`); // In real app, send via SMS

  res.json({ message: 'OTP sent successfully' });
});

app.post('/api/auth/verify-otp', (req, res) => {
  const { phoneNumber, otp } = req.body;

  if (otpStore[phoneNumber] && otpStore[phoneNumber] === otp) {
    delete otpStore[phoneNumber]; // OTP used, remove it
    return res.json({ message: 'OTP verified successfully' });
  } else {
    return res.status(400).json({ message: 'Invalid OTP' });
  }
});
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
