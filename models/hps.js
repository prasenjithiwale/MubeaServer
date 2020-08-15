module.exports = (sequelize, DataTypes) => {
    const Hps = sequelize.define("Hps", {
        Customer:{
            type: DataTypes.STRING,
            allowNull: false
        },
        PartNo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        PartName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SpringMin:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MAHPSNo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        LoFinal:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ID1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        OD:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Lc:{
            type: DataTypes.STRING,
            allowNull: false
        },
        F1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        F2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPTube1ID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPTube1IDQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPTube2ID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPTube2IDQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPTube3ID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPTube3IDQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPLoadTestToolOD1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPLoadTestToolOD2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPLoadTestL1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPLoadTestL2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPLoadTestToolQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        TUPR:{
            type: DataTypes.STRING,
            allowNull: false
        },
        TUPL1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        TUPQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPStripperIDControlID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPStripperIDControlQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPInnerDiameterTestOD1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPInnerDiameterTestOD2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPInnerDiameterTestL1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPInnerDiameterTestQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPBottomSectionIDControlID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPBottomSectionIDControlIDQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPBottomSectionIDControlOD:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPBottomSectionIDControlODQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPCRingThickness:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPCRingQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPODBoxOD:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPODBoxODQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        upto:{
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Hps;
}