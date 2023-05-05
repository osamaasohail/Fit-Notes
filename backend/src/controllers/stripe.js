const express = require("express");
const router = express.Router();
require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51K6TTUFJlvwC7pufNo15hNsO02Wa5VrTCaTSi7trrXHw2ju5T8RGLCrQUQI4RQ3sewOMTN4ENyizBeRDkafCVEe700RCDvZkzj"
);

module.exports = {
  session: async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        success_url: "http://localhost:3000/profile",
        line_items: [{ price: "price_1MxytJFJlvwC7pufBIhIxwDL", quantity: req.body.quantity }],
        mode: "subscription",
      });
        res.json({ url: session.url });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
