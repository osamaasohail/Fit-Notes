const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("../models/User");
require("dotenv").config();
const handlebars = require('handlebars');
const fs = require('fs');
module.exports = {
    register: async(req, res) => {
        try {
            const { name, email, password, accountType } = req.body;
            // Check if the user already exists
            const userExists = await User.findOne({ email });
            if (userExists) return res.status(400).json({ error: "Email already exists" });
            // Generate a verification token
            const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET);
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            // Create a new user
            let isActive = true;
            const user = new User({
                name,
                email,
                password: hashedPassword,
                verificationToken,
                accountType,
                isActive
            });
            // Save the user to the database
            let myNewUser = await user.save();
            // Send a verification email to the user
            const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
            });
            const source = fs.readFileSync('src/templates/email-template-verification.html', 'utf8');
            const template = handlebars.compile(source);
            let link = `${process.env.BASE_URL}/verify-email/${myNewUser._id.toString()}?token=${verificationToken}`;
            const mailOptions = {
                from: 'hamza@infosun.co.uk',
                to: email,
                subject: "Email Verification",
                html: template({name: name, link: link}),
                attachments: [{
                    filename: 'logo.png',
                    path: 'src/templates/Email-Template.png',
                    cid: 'unique@logo.png'
                }]
            };
            transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
            });
            res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error" });
        }
    },
    getUsers: async(req,res) => {
        User.find({isActive: true})
        .then(docs => {
            res.status(201).json({users: docs});
        })
        .catch(err => {
            res.status(500).json({ error: "Internal server error" });
        });
    },
    login: async(req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
            }
            console.log(user);
            const isMatch = await comparePassword(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = user.generateAuthToken();

            res.status(201).json({ message: 'User Logged In Succesfully', token: token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },
    updateUser: async(req, res) => {
        try {
            const { name } = req.body;
            await User.updateOne({ _id: req.params.id }, { $set: { name: name } });
            res.status(201).json({ message: "Successfully Updated User" });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },
    verifyEmail: async (req, res) => {    
        try {
            const { token } = req.query;
            if (!token) {
                return res.status(400).json({ error: "Token is required" });
            } else {
                const myUser = await User.findOne({
                    _id: req.params.id,
                    verificationToken: token
                });
                if (myUser.isVerified) return res.status(201).json({ error: "Email Already Verified" });
                if (!myUser) return res.status(400).json({ error: "Email Not Verified" });
                else {
                    await User.updateOne({ _id: req.params.id }, { $set: { isVerified: true }});
                    res.status(201).json({ message: "Successfully Verified User" });
                } 
            }
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}
const comparePassword = async (password, hash) => {
    try {
      const isMatch = await bcrypt.compare(password, hash);
      return isMatch;
    } catch (error) {
      console.error(error);
    }
};
User.prototype.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, name: this.name }, process.env.JWT_SECRET, { expiresIn: '2h' });
    return token;
};  

