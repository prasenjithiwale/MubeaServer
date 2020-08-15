module.exports = (sequelize, DataTypes) => {
    const Chamfering = sequelize.define("Chamfering", {
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
        MAChamferingMachine:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Chamfer:{
            type: DataTypes.STRING,
            allowNull: false
        },
        LoC:{
            type: DataTypes.STRING,
            allowNull: false
        },
        e1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        e2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ODc:{
            type: DataTypes.STRING,
            allowNull: false
        },
        TGChamferingWheel:{
            type: DataTypes.STRING,
            allowNull: false
        },
        TGChamferingWheelQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MADistancePieceL1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MARollerL1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MASpacerL1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MAGrindingPinOD:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MAShiftShoeL1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MAShiftShoeL2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MARevolverStarL1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MARevolverStarOD1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        upto:{
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Chamfering;
}