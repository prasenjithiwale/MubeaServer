const express = require('express');
const router = express.Router();
const db = require('../models');



router.get('/hps/all', (req, res) =>{
    db.Hps.findAll()
    .then(hps => res.send(hps))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.get('/hps/find/:PartNo', (req, res) =>{
    db.Hps.findAll({
        where: {
            PartNo: req.params.PartNo
        }
    })
    .then(hps => res.send(hps))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.post('/hps/new', (req, res) =>{
    db.Hps.create({
        Customer: req.body.Customer,
        PartNo: req.body.PartNo,
        PartName: req.body.PartName,
        SpringMin: req.body.SpringMin,
        MAHPSNo: req.body.MAHPSNo,
        LoFinal: req.body.LoFinal,
        ID: req.body.ID,
        OD: req.body.OD,
        Lc: req.body.Lc,
        F1: req.body.F1,
        F2: req.body.F2,
        KEBPTube1ID: req.body.KEBPTube1ID,
        KEBPTube1IDQuant: req.body.KEBPTube1IDQuant,
        KEBPTube2ID: req.body.KEBPTube2ID,
        KEBPTube2IDQuant: req.body.KEBPTube2IDQuant,
        KEBPTube3ID: req.body.KEBPTube3ID,
        KEBPTube3IDQuant: req.body.KEBPTube3IDQuant,
        SSEPLoadTestToolOD1: req.body.SSEPLoadTestToolOD1,
        SSEPLoadTestToolOD2: req.body.SSEPLoadTestToolOD2,
        SSEPLoadTestL1: req.body.SSEPLoadTestL1,
        SSEPLoadTestL2: req.body.SSEPLoadTestL2,
        SSEPLoadTestToolQuant: req.body.SSEPLoadTestToolQuant,
        TUPR: req.body.TUPR,
        TUPL1: req.body.TUPL1,
        TUPQuant: req.body.TUPQuant,
        KEBPStripperIDControlID: req.body.KEBPStripperIDControlID,
        KEBPStripperIDControlQuant: req.body.KEBPStripperIDControlQuant,
        KEBPInnerDiameterTestOD1: req.body.KEBPInnerDiameterTestOD1,
        KEBPInnerDiameterTestOD2: req.body.KEBPInnerDiameterTestOD2,
        KEBPInnerDiameterTestL1: req.body.KEBPInnerDiameterTestL1,
        KEBPInnerDiameterTestQuant: req.body.KEBPInnerDiameterTestQuant,
        SSEPBottomSectionIDControlID: req.body.SSEPBottomSectionIDControlID,
        SSEPBottomSectionIDControlIDQuant: req.body.SSEPBottomSectionIDControlIDQuant,
        SSEPBottomSectionIDControlOD: req.body.SSEPBottomSectionIDControlOD,
        SSEPBottomSectionIDControlODQuant: req.body.SSEPBottomSectionIDControlODQuant,
        SSEPCRingThickness: req.body.SSEPCRingThickness,
        SSEPCRingQuant: req.body.SSEPCRingQuant,
        SSEPODBoxOD: req.body.SSEPODBoxOD,
        SSEPODBoxODQuant: req.body.SSEPODBoxODQuant,
        upto: req.body.upto
    }).then(submittedhps => res.send(submittedhps))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.delete('/hps/delete/:PartNo', (req, res) => {
    db.Hps.destroy({
        where: {
            PartNo: req.params.PartNo
        }
    }).then(() => res.send({
        message: 'Part No \''+req.params.PartNo+'\' deleted successfully'
    })).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.put('/hps/edit', (req, res) => {
    db.Hps.update(
        {
            Customer: req.body.Customer,
            PartNo: req.body.PartNo,
            PartName: req.body.PartName,
            SpringMin: req.body.SpringMin,
            MAHPSNo: req.body.MAHPSNo,
            LoFinal: req.body.LoFinal,
            ID1: req.body.ID1,
            OD: req.body.OD,
            Lc: req.body.Lc,
            F1: req.body.F1,
            F2: req.body.F2,
            KEBPTube1ID: req.body.KEBPTube1ID,
            KEBPTube1IDQuant: req.body.KEBPTube1IDQuant,
            KEBPTube2ID: req.body.KEBPTube2ID,
            KEBPTube2IDQuant: req.body.KEBPTube2IDQuant,
            KEBPTube3ID: req.body.KEBPTube3ID,
            KEBPTube3IDQuant: req.body.KEBPTube3IDQuant,
            SSEPLoadTestToolOD1: req.body.SSEPLoadTestToolOD1,
            SSEPLoadTestToolOD2: req.body.SSEPLoadTestToolOD2,
            SSEPLoadTestL1: req.body.SSEPLoadTestL1,
            SSEPLoadTestL2: req.body.SSEPLoadTestL2,
            SSEPLoadTestToolQuant: req.body.SSEPLoadTestToolQuant,
            TUPR: req.body.TUPR,
            TUPL1: req.body.TUPL1,
            TUPQuant: req.body.TUPQuant,
            KEBPStripperIDControlID: req.body.KEBPStripperIDControlID,
            KEBPStripperIDControlQuant: req.body.KEBPStripperIDControlQuant,
            KEBPInnerDiameterTestOD1: req.body.KEBPInnerDiameterTestOD1,
            KEBPInnerDiameterTestOD2: req.body.KEBPInnerDiameterTestOD2,
            KEBPInnerDiameterTestL1: req.body.KEBPInnerDiameterTestL1,
            KEBPInnerDiameterTestQuant: req.body.KEBPInnerDiameterTestQuant,
            SSEPBottomSectionIDControlID: req.body.SSEPBottomSectionIDControlID,
            SSEPBottomSectionIDControlIDQuant: req.body.SSEPBottomSectionIDControlIDQuant,
            SSEPBottomSectionIDControlOD: req.body.SSEPBottomSectionIDControlOD,
            SSEPBottomSectionIDControlODQuant: req.body.SSEPBottomSectionIDControlODQuant,
            SSEPCRingThickness: req.body.SSEPCRingThickness,
            SSEPCRingQuant: req.body.SSEPCRingQuant,
            SSEPODBoxOD: req.body.SSEPODBoxOD,
            SSEPODBoxODQuant: req.body.SSEPODBoxODQuant,
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