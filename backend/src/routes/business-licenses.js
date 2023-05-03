const businessLicenseController = require('../controllers/businessLicense');

const authorize = require('../middlewares/authorize');
module.exports = (app) => {
    app.route('/business-licence')
        .get(authorize, businessLicenseController.get)
        .post(authorize, businessLicenseController.add)
    app.route('/business-licence/:id')
        .put(authorize, businessLicenseController.update)
        .delete(authorize, businessLicenseController.delete)
}