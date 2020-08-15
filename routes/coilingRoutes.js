const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/coiling/all", (req, res) => {
  db.Coiling.findAll()
    .then((coiling) => res.send(coiling))
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

router.get("/coiling/find/:PartNo", (req, res) => {
  db.Coiling.findAll({
    where: {
      PartNo: req.params.PartNo,
    },
  })
    .then((coiling) => res.send(coiling))
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

router.post("/coiling/new", (req, res) => {
  db.Coiling.create({
    OEM: req.body.OEM,
    PartNo: req.body.PartNo,
    PartName: req.body.PartName,
    WireDiameter: req.body.WireDiameter,
    Process: req.body.Process,
    WGCoilingMachine: req.body.WGCoilingMachine,
    CoilingSpeed: req.body.CoilingSpeed,
    Loc: req.body.Loc,
    IdC: req.body.IdC,
    OdC: req.body.OdC,
    KEBPnt: req.body.KEBPnt,
    KEBPntQuant: req.body.KEBPntQuant,
    KEBPIDMandrel: req.body.KEBPIDMandrel,
    KEBPIDMandrelQuant: req.body.KEBPIDMandrelQuant,
    KEBPODBush: req.body.KEBPODBush,
    KEBPODBushQuant: req.body.KEBPODBushQuant,
    KEBPLengthM: req.body.KEBPLengthM,
    LengthMQuant: req.body.LengthMQuant,
    KEBPPitchTool: req.body.KEBPPitchTool,
    KEBPPitchToolQuant: req.body.KEBPPitchToolQuant,
    KEBPImessBushLo: req.body.KEBPImessBushLo,
    KEBPImessBushOD: req.body.KEBPImessBushOD,
    KEBPImessBushQuant: req.body.KEBPImessBushQuant,
    WGENFeedRoller: req.body.WGENFeedRoller,
    WGENFRQuant: req.body.WGENFRQuant,
    WTHGWireGuide: req.body.WTHGWireGuide,
    WTHGWGQuant: req.body.WTHGWGQuant,
    CoilingPin: req.body.CoilingPin,
    ENCutterInserts: req.body.ENCutterInserts,
    ENCIQuant: req.body.ENCIQuant,
    ENCoilingMandrel: req.body.ENCoilingMandrel,
    ENCMQuant: req.body.ENCMQuant,
    KEBPCuttingKnifel: req.body.KEBPCuttingKnifel,
    KEBPPitchTooll: req.body.KEBPPitchTooll,
    temprature: req.body.temprature,
    MMXGQuant: req.body.MMXGQuant,
    MMXGLTotal: req.body.MMXGLTotal,
    MMXGL1: req.body.MMXGL1,
    MMXGL2: req.body.MMXGL2,
    MMXGOD1: req.body.MMXGOD1,
    MMXGOD2: req.body.MMXGOD2,
    MMXGOD3: req.body.MMXGOD3,
    upto: req.body.upto,
  })
    .then((submittedcoiling) => res.send(submittedcoiling))
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

router.delete("/coiling/delete/:PartNo", (req, res) => {
  db.Coiling.destroy({
    where: {
      PartNo: req.params.PartNo,
    },
  })
    .then(() =>
      res.send({
        message: "Part No '" + req.params.id + "' deleted successfully",
      })
    )
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

router.put("/coiling/edit", (req, res) => {
  db.Coiling.update(
    {
      OEM: req.body.OEM,
      PartNo: req.body.PartNo,
      PartName: req.body.PartName,
      WireDiameter: req.body.WireDiameter,
      Process: req.body.Process,
      WGCoilingMachine: req.body.WGCoilingMachine,
      CoilingSpeed: req.body.CoilingSpeed,
      Loc: req.body.Loc,
      IdC: req.body.IdC,
      OdC: req.body.OdC,
      KEBPnt: req.body.KEBPnt,
      KEBPntQuant: req.body.KEBPntQuant,
      KEBPIDMandrel: req.body.KEBPIDMandrel,
      KEBPIDMandrelQuant: req.body.KEBPIDMandrelQuant,
      KEBPODBush: req.body.KEBPODBush,
      KEBPODBushQuant: req.body.KEBPODBushQuant,
      KEBPLengthM: req.body.KEBPLengthM,
      LengthMQuant: req.body.LengthMQuant,
      KEBPPitchTool: req.body.KEBPPitchTool,
      KEBPPitchToolQuant: req.body.KEBPPitchToolQuant,
      KEBPImessBushLo: req.body.KEBPImessBushLo,
      KEBPImessBushOD: req.body.KEBPImessBushOD,
      KEBPImessBushQuant: req.body.KEBPImessBushQuant,
      WGENFeedRoller: req.body.WGENFeedRoller,
      WGENFRQuant: req.body.WGENFRQuant,
      WTHGWireGuide: req.body.WTHGWireGuide,
      WTHGWGQuant: req.body.WTHGWGQuant,
      CoilingPin: req.body.CoilingPin,
      ENCutterInserts: req.body.ENCutterInserts,
      ENCIQuant: req.body.ENCIQuant,
      ENCoilingMandrel: req.body.ENCoilingMandrel,
      ENCMQuant: req.body.ENCMQuant,
      KEBPCuttingKnifel: req.body.KEBPCuttingKnifel,
      KEBPPitchTooll: req.body.KEBPPitchTooll,
      temprature: req.body.temprature,
      MMXGQuant: req.body.MMXGQuant,
      MMXGLTotal: req.body.MMXGLTotal,
      MMXGL1: req.body.MMXGL1,
      MMXGL2: req.body.MMXGL2,
      MMXGOD1: req.body.MMXGOD1,
      MMXGOD2: req.body.MMXGOD2,
      MMXGOD3: req.body.MMXGOD3,
      upto: req.body.upto,
    },
    {
      where: { PartNo: req.body.PartNo },
    }
  )
    .then(() =>
      res.send({
        message: "Part No '" + req.body.PartNo + "' updated successfully",
      })
    )
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

module.exports = router;
