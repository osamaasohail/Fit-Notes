require("dotenv").config();
// var url = 'mongodb+srv://hamzaali5542:hamza123@cluster0.caxwlnb.mongodb.net/test';
var url = process.env.MONGODB_URL;
//var url = 'mongodb://localhost:27017/fyp-web'
module.exports = url;
