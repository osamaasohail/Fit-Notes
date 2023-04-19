const authController = require('../controllers/auth');
module.exports = (app) => {
    app.route('/register')
        .post(authController.register);
    app.route('/verify-email/:id')
        .get(authController.verifyEmail)
}