const Certificate = require('../models/Certificate');
module.exports = {
    addNewCertificate: async(req, res) => {
        const certificate = {
            refUser: req.params.id,
            name: req.body.name,
            role: req.body.role,
            licenseNumber: req.body.licenseNumber,
            expiryDate: new Date(req.body.expiryDate),
            dutyManagers: req.body.dutyManagers,
            gamingLicense: req.body.gamingLicense,
            gamingLicenseExpiry: req.body.gamingLicenseExpiry,
            sendNotiBeforeExpiry: req.body.sendNotiBeforeExpiry
        }
        console.log(certificate);
        const doc = new Certificate(certificate);
        await doc.save();
        res.json(true)
    }
}