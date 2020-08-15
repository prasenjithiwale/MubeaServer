const express = require('express');
const router = express.Router();
const db = require('../models');



router.get('/spcc/all', (req, res) =>{
    db.Spcc.findAll()
    .then(spcc => res.send(spcc))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.get('/spcc/find/:PartNo', (req, res) =>{
    db.Spcc.findAll({
        where: {
            PartNo: req.params.PartNo
        }
    })
    .then(spcc => res.send(spcc))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.post('/spcc/new', (req, res) =>{
    db.Spcc.create({
            Customer: req.body.Customer,
            PartNo: req.body.PartNo,
            PartName: req.body.PartName,
            MAProcess: req.body.MAProcess,
            GrainSize: req.body.GrainSize,
            MAHPSNo: req.body.MAHPSNo,
            RevolverL1: req.body.RevolverL1,
            RevolverFi: req.body.RevolverFi,
            Color: req.body.Color,
            SIIDimenClichePlateDimen: req.body.SIIDimenClichePlateDimen,
            SIIDimenClichePlateQuant: req.body.SIIDimenClichePlateQuant,
            SIIDimenTamponSideSide: req.body.SIIDimenTamponSideSide,
            SIIDimenTamponSideSideQuant: req.body.SIIDimenTamponSideSideQuant,
            SIIDimenTamponSideTop: req.body.SIIDimenTamponSideTop,
            SIIDimenTamponSideTopQuant: req.body.SIIDimenTamponSideTopQuant,
            upto: req.body.upto
    }).then(submittedspcc => res.send(submittedspcc))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.delete('/spcc/delete/:PartNo', (req, res) => {
    db.Spcc.destroy({
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

router.put('/spcc/edit', (req, res) => {
    db.Spcc.update(
        {
            Customer: req.body.Customer,
            PartNo: req.body.PartNo,
            PartName: req.body.PartName,
            MAProcess: req.body.MAProcess,
            GrainSize: req.body.GrainSize,
            MAHPSNo: req.body.MAHPSNo,
            RevolverL1: req.body.RevolverL1,
            RevolverFi: req.body.RevolverFi,
            Color: req.body.Color,
            SIIDimenClichePlateDimen: req.body.SIIDimenClichePlateDimen,
            SIIDimenClichePlateQuant: req.body.SIIDimenClichePlateQuant,
            SIIDimenTamponSideSide: req.body.SIIDimenTamponSideSide,
            SIIDimenTamponSideSideQuant: req.body.SIIDimenTamponSideSideQuant,
            SIIDimenTamponSideTop: req.body.SIIDimenTamponSideTop,
            SIIDimenTamponSideTopQuant: req.body.SIIDimenTamponSideTopQuant,
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