const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/chamfering/all', (req, res) =>{
    db.Chamfering.findAll()
    .then(chamfering => res.send(chamfering))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.get('/chamfering/find/:PartNo', (req, res) =>{
    db.Chamfering.findAll({
        where: {
            PartNo: req.params.PartNo
        }
    })
    .then(chamfering => res.send(chamfering))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.post('/chamfering/new', (req, res) =>{
    db.Chamfering.create({
            Customer: req.body.Customer,
            PartNo: req.body.PartNo,
            PartName: req.body.PartName,
            MAChamferingMachine: req.body.MAChamferingMachine,
            Chamfer: req.body.Chamfer,
            LoC: req.body.LoC,
            e1: req.body.e1,
            e2: req.body.e2,
            ODc: req.body.ODc,
            TGChamferingWheel: req.body.TGChamferingWheel,
            TGChamferingWheelQuant: req.body.TGChamferingWheelQuant,
            MADistancePieceL1: req.body.MADistancePieceL1,
            MARollerL1: req.body.MARollerL1,
            MASpacerL1: req.body.MASpacerL1,
            MAGrindingPinOD: req.body.MAGrindingPinOD,
            MAShiftShoeL1: req.body.MAShiftShoeL1,
            MAShiftShoeL2: req.body.MAShiftShoeL2,
            MARevolverStarL1: req.body.MARevolverStarL1,
            MARevolverStarOD1: req.body.MARevolverStarOD1,
            upto: req.body.upto
    }).then(submittedchamfering => res.send(submittedchamfering))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.delete('/chamfering/delete/:PartNo', (req, res) => {
    db.Chamfering.destroy({
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

router.put('/chamfering/edit', (req, res) => {
    db.Chamfering.update(
        {
            Customer: req.body.Customer,
            PartNo: req.body.PartNo,
            PartName: req.body.PartName,
            MAChamferingMachine: req.body.MAChamferingMachine,
            Chamfer: req.body.Chamfer,
            LoC: req.body.LoC,
            e1: req.body.e1,
            e2: req.body.e2,
            ODc: req.body.ODc,
            TGChamferingWheel: req.body.TGChamferingWheel,
            TGChamferingWheelQuant: req.body.TGChamferingWheelQuant,
            MADistancePieceL1: req.body.MADistancePieceL1,
            MARollerL1: req.body.MARollerL1,
            MASpacerL1: req.body.MASpacerL1,
            MAGrindingPinOD: req.body.MAGrindingPinOD,
            MAShiftShoeL1: req.body.MAShiftShoeL1,
            MAShiftShoeL2: req.body.MAShiftShoeL2,
            MARevolverStarL1: req.body.MARevolverStarL1,
            MARevolverStarOD1: req.body.MARevolverStarOD1,
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