const authController = require('../controllers/auth');
module.exports = (app) => {
    
    app.route('/users')
        .get(authController.getUsers);
    app.route('/update-user/:id')
        .put(authController.updateUser)
    app.route('/register')
        .post(authController.register);
    app.route('/login')
        .post(authController.login);
    app.route('/verify-email/:id')
        .get(authController.verifyEmail)
}