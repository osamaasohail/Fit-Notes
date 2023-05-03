const BusinessLicense = require('../models/BusinessLicense');
const DutyManagers = require('../models/DutyManagers');
const mongoose = require('mongoose');
module.exports = {
    add: async(req, res) => {
        try {
            const objectId = new mongoose.Types.ObjectId();
            const businessLicense = {
                _id: objectId,
                refUser: req.user._id,
                name: req.body.name,
                role: req.body.role,
                licenseNumber: req.body.licenseNumber,
                expiryDate: new Date(req.body.expiryDate),
                gamingLicense: req.body.gamingLicense,
                gamingLicenseExpiry: req.body.gamingLicenseExpiry,
                sendNotiBeforeExpiry: req.body.sendNotiBeforeExpiry,
                dutyManagers: [],
                isActive: true
            }
            let dutyManagers = req.body.dutyManagers;
            dutyManagers = dutyManagers.map(doc => {
                return { ...doc, _id: new mongoose.Types.ObjectId(), isActive: true, certId: objectId };
            });
            const dutyManagerIds = dutyManagers.reduce((accumulator, currentValue) => {
                accumulator.push(currentValue._id);
                return accumulator;
            }, []);
            businessLicense.dutyManagers = dutyManagerIds;
            const doc = new BusinessLicense(businessLicense);
            await DutyManagers.insertMany(dutyManagers)
            .then(docs => {
                return doc.save()
            }).then(d => {
                res.status(201).json({message: 'Business License Added Succesfully'});
            })
            .catch(err => {
                res.status(500).json({ error: "Internal server error" });
            });
        } catch(err) {
            console.log(err);
            res.status(500).json({ error: err });
        }
    },
    get: async(req, res) => {
        BusinessLicense.find({ refUser: req.user._id, isActive: true })
        .populate({
            path: 'dutyManagers',
            match: { isActive: true }
        })
        .then(docs => {
            res.status(201).json({ licenses: docs});
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: err, message: "Internal server error" });
        });
    },
    update: async(req, res) => {
        BusinessLicense.updateOne({ refUser: req.params.id },{ $set: req.body }, { new: true })
        .then(updatedDocument => {
            res.status(201).json({doc: updatedDocument});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err, message: "Internal server error" });
        });
    },
    delete: async(req, res) => {
        await BusinessLicense.updateOne({ _id: req.params.id }, { $set: { isActive: false } }, { new: true }).then(docs => {
            return DutyManagers.updateMany({ certId: req.params.id }, { $set: { isActive: false } }, { new: true })
        }).then(d => {
            res.status(201).json({message: 'Business License Deleted Succesfully'});
        }).catch(err => {
            res.status(500).json({ error: "Internal server error" });
        });
    }
}