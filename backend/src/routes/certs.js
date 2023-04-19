const certsController = require('../controllers/certs');
const authorize = require('../middlewares/authorize');
module.exports = (app) => {
    app.route('/cert/:id')
        .post(authorize, certsController.addNewCertificate);
}