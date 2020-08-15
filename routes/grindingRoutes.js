const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/grinding/all', (req, res) =>{
    db.Grinding.findAll()
    .then(grinding => res.send(grinding))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.get('/grinding/find/:PartNo', (req, res) =>{
    db.Grinding.findAll({
        where: {
            PartNo: req.params.PartNo
        }
    })
    .then(grinding => res.send(grinding))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.post('/grinding/new', (req, res) =>{
    db.Grinding.create({
            Customer: req.body.Customer,
            PartNo: req.body.PartNo,
            PartName: req.body.PartName,
            MAGrindingMachine: req.body.MAGrindingMachine,
            SSEPLoadingPlateNo: req.body.SSEPLoadingPlateNo,
            GrindingSpeed: req.body.GrindingSpeed,
            GrindingAngle: req.body.GrindingAngle,
            e1: req.body.e1,
            e2: req.body.e2,
            ODg: req.body.ODg,
            MALSTube1: req.body.MALSTube1,
            MALSTube1Quant: req.body.MALSTube1Quant,
            MARollerL1: req.body.MALSTube2,
            MALSTube2Quant: req.body.MALSTube2Quant,
            MALSTube3: req.body.MALSTube3,
            MALSTube3Quant: req.body.MALSTube3Quant,
            SSEPODDisk: req.body.SSEPODDisk,
            SSEPThicknessDisk: req.body.SSEPThicknessDisk,
            SSEPIdBush: req.body.SSEPIdBush,
            SSEPThicknessBush: req.body.SSEPThicknessBush,
            SSEPODBush: req.body.SSEPODBush,
            SSEPHoleF: req.body.SSEPHoleF,
            SSEPLoBush: req.body.SSEPLoBush,
            upto: req.body.upto
    }).then(submittedgrinding => res.send(submittedgrinding))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.delete('/grinding/delete/:PartNo', (req, res) => {
    db.Grinding.destroy({
        where: {
            PartNo: req.params.PartNo
        }
    }).then(() => res.send({
        message: 'Part No \''+req.params.id+'\' deleted successfully'
    })).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.put('/grinding/edit', (req, res) => {
    db.Grinding.update(
        {
            Customer: req.body.Customer,
            PartNo: req.body.PartNo,
            PartName: req.body.PartName,
            MAGrindingMachine: req.body.MAGrindingMachine,
            SSEPLoadingPlateNo: req.body.SSEPLoadingPlateNo,
            GrindingSpeed: req.body.GrindingSpeed,
            GrindingAngle: req.body.GrindingAngle,
            e1: req.body.e1,
            e2: req.body.e2,
            ODg: req.body.ODg,
            MALSTube1: req.body.MALSTube1,
            MALSTube1Quant: req.body.MALSTube1Quant,
            MARollerL1: req.body.MALSTube2,
            MALSTube2Quant: req.body.MALSTube2Quant,
            MALSTube3: req.body.MALSTube3,
            MALSTube3Quant: req.body.MALSTube3Quant,
            SSEPODDisk: req.body.SSEPODDisk,
            SSEPThicknessDisk: req.body.SSEPThicknessDisk,
            SSEPIdBush: req.body.SSEPIdBush,
            SSEPThicknessBush: req.body.SSEPThicknessBush,
            SSEPODBush: req.body.SSEPODBush,
            SSEPHoleF: req.body.SSEPHoleF,
            SSEPLoBush: req.body.SSEPLoBush,
            upto: req.body.upto
        },
        {
            where: {PartNo: req.body.PartNo}
        }
    ).then(() => res.send({
        message: 'Part No \''+req.body.PartNo+'\' updated successfully'
    })).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});


module.exports = router;