const twilio = require('twilio');
const otpStore = {};

const sendOtp = async (req, res) => {
  const { phoneNumber } = req.body;
  
  if (!phoneNumber || phoneNumber.length !== 10) {
    return res.status(400).json({ message: 'Invalid phone number.' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[phoneNumber] = otp;

  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    const client = twilio(accountSid, authToken);

    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: twilioPhoneNumber,
      to: `+91${phoneNumber}`,
    });

    return res.status(200).json({ message: 'OTP sent successfully.' });
  } catch (error) {
    console.error("Twilio Error:", error);
    return res.status(500).json({ message: 'Failed to send OTP.' });
  }
};

const verifyOtp = (req, res) => {
  const { phoneNumber, otp } = req.body;

  if (!phoneNumber || !otp || otp.length !== 6) {
    return res.status(400).json({ message: 'Invalid phone number or OTP.' });
  }

  if (otpStore[phoneNumber] && otpStore[phoneNumber] === otp) {
    delete otpStore[phoneNumber];
    return res.status(200).json({ message: 'OTP verified successfully.' });
  } else {
    return res.status(400).json({ message: 'Invalid OTP.' });
  }
};

module.exports = { sendOtp, verifyOtp };
