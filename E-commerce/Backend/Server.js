// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const twilio = require('twilio');

// const port = process.env.PORT || 8000;

// app.use(cors());
// app.use(express.json());
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// const client = twilio(accountSid, authToken);
// let otpStore = {};

// // Route to send OTP
// app.post('/api/auth/send-otp', async (req, res) => {
//   const { phoneNumber } = req.body;

//   if (!phoneNumber || phoneNumber.length !== 10) {
//     return res.status(400).json({ message: 'Invalid phone number.' });
//   }

//   // Generate a random OTP (e.g., 6 digits)
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   // Store OTP in memory (use a database in production)
//   otpStore[phoneNumber] = otp;

//   try {
//     // Send OTP via Twilio SMS
//     await client.messages.create({
//       body: `Your OTP is ${otp}`,
//       from: twilioPhoneNumber,
//       to: `+91${phoneNumber}`,
//     });

//     return res.status(200).json({ message: 'OTP sent successfully.' });
//   } catch (error) {
//     console.error('Twilio Error:', error);
//     return res.status(500).json({ message: 'Failed to send OTP.' });
//   }
// });

// // Route to verify OTP
// app.post('/api/auth/verify-otp', (req, res) => {
//   const { phoneNumber, otp } = req.body;

//   if (!phoneNumber || !otp || otp.length !== 6) {
//     return res.status(400).json({ message: 'Invalid phone number or OTP.' });
//   }

//   // Check if OTP is valid for the given phone number
//   if (otpStore[phoneNumber] && otpStore[phoneNumber] === otp) {
//     // OTP is valid, proceed with user login or registration
//     delete otpStore[phoneNumber]; // OTP should be cleared after verification
//     return res.status(200).json({ message: 'OTP verified successfully.' });
//   } else {
//     return res.status(400).json({ message: 'Invalid OTP.' });
//   }
// });

// const body = require("./Routes/Body");
// const category = require("./Routes/Category");
// const categorycart = require("./Routes/CategoriesCart");
// const Winter = require("./Routes/Winter");
// const saree = require("./Routes/Women/Saree");

// app.use("/api/body", body);
// app.use("/api/category", category);
// app.use("/api/categorycart", categorycart);
// app.use("/api/winter", Winter);
// app.use("/api/women", saree);

// app.listen(port, () => {
//   console.log(`Server is running at port ${port}`);
// });


require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const twilio = require("twilio");
const rateLimit = require("express-rate-limit"); // For rate limiting

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

// Rate limiter for OTP requests (limit to 5 requests per IP per 15 minutes)
const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per window
  message: "Too many requests, please try again later.",
});

// Use rate limiter for OTP sending route
app.use("/api/auth/send-otp", otpLimiter);

// Store OTP in memory (use DB for production)
let otpStore = {};

// Route to send OTP
app.post("/api/auth/send-otp", async (req, res) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber || phoneNumber.length !== 10) {
    return res.status(400).json({ message: "Invalid phone number." });
  }

  // Generate a random OTP (e.g., 6 digits)
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Store OTP in memory (use a database in production)
  otpStore[phoneNumber] = otp;

  try {
    // Send OTP via Twilio SMS
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: twilioPhoneNumber,
      to: `+91${phoneNumber}`,
    });

    return res.status(200).json({ message: "OTP sent successfully." });
  } catch (error) {
    console.error("Twilio Error:", error);
    return res.status(500).json({ message: "Failed to send OTP." });
  }
});

// Route to verify OTP
app.post("/api/auth/verify-otp", (req, res) => {
  const { phoneNumber, otp } = req.body;

  if (!phoneNumber || !otp || otp.length !== 6) {
    return res.status(400).json({ message: "Invalid phone number or OTP." });
  }

  // Check if OTP is valid for the given phone number
  if (otpStore[phoneNumber] && otpStore[phoneNumber] === otp) {
    // OTP is valid, proceed with user login or registration
    delete otpStore[phoneNumber]; // OTP should be cleared after verification
    return res.status(200).json({ message: "OTP verified successfully." });
  } else {
    return res.status(400).json({ message: "Invalid OTP." });
  }
});

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
