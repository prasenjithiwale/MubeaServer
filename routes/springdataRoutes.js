const express = require('express');
const router = express.Router();
const db = require('../models');



router.get('/springdata/all', (req, res) =>{
    db.SpringData.findAll()
    .then(springdata => res.send(springdata))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.get('/springdata/find/:PartNo', (req, res) =>{
    db.SpringData.findAll({
        where: {
            PartNo: req.params.PartNo
        }
    })
    .then(springdata => res.send(springdata))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.post('/springdata/new', (req, res) =>{
    db.SpringData.create({
        PartNo: req.body.PartNo,
        Customer: req.body.Customer,
        PartName: req.body.PartName,
        WireDiameter: req.body.WireDiameter,
        Process: req.body.Process,
        Material: req.body.Material,
        ID02: req.body.ID02,
        OD02: req.body.OD02,
        Lo: req.body.Lo,
        Lc: req.body.Lc,
        nt01: req.body.nt01,
        F1: req.body.F1,
        F2: req.body.F2,
        GrossWeight: req.body.GrossWeight,
        SpringsEngine: req.body.SpringsEngine,
        Chamfering: req.body.Chamfering,
        upto: req.body.upto
    }).then(submittedspcc => res.send(submittedspcc))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.delete('/springdata/delete/:PartNo', (req, res) => {
    db.SpringData.destroy({
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

router.put('/springdata/edit', (req, res) => {
    db.SpringData.update(
        {
            PartNo: req.body.PartNo,
            Customer: req.body.Customer,
            PartName: req.body.PartName,
            WireDiameter: req.body.WireDiameter,
            Process: req.body.Process,
            Material: req.body.Material,
            ID02: req.body.ID02,
            OD02: req.body.OD02,
            Lo: req.body.Lo,
            Lc: req.body.Lc,
            nt01: req.body.nt01,
            F1: req.body.F1,
            F2: req.body.F2,
            GrossWeight: req.body.GrossWeight,
            SpringsEngine: req.body.SpringsEngine,
            Chamfering: req.body.Chamfering,
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