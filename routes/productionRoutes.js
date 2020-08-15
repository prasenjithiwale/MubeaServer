const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/production/all', (req, res) =>{
    db.ProductionNo.findAll()
    .then(productionnos => res.send(productionnos))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.get('/production/find/:PartNo', (req, res) =>{
    db.ProductionNo.findAll({
        where: {
            PartNo: req.params.PartNo
        }
    })
    .then(productionnos => res.send(productionnos))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.post('/production/new', (req, res) =>{
    db.ProductionNo.create({
        Customer: req.body.Customer,
        PartNo: req.body.PartNo,
        PartName: req.body.PartName,
        s2019: req.body.s2019,
        s2020: req.body.s2020,
        s2021: req.body.s2021,
        s2022: req.body.s2022,
        s2023: req.body.s2023
    }).then(submittedProduction => res.send(submittedProduction))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.delete('/production/delete/:PartNo', (req, res) => {
    db.ProductionNo.destroy({
        where: {
            PartNo: req.params.id
        }
    }).then(() => res.send({
        message: 'Part No \''+req.params.id+'\' deleted successfully'
    })).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.put('/production/edit', (req, res) => {
    db.ProductionNo.update(
        {
            Customer: req.body.Customer,
            PartNo: req.body.PartNo,
            PartName: req.body.PartName,
            s2019: req.body.s2019,
            s2020: req.body.s2020,
            s2021: req.body.s2021,
            s2022: req.body.s2022,
            s2023: req.body.s2023
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
