module.exports = (sequelize, DataTypes) =>{
    const Grinding = sequelize.define("Grinding", {
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
        MAGrindingMachine:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPLoadingPlateNo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        GrindingSpeed:{
            type: DataTypes.STRING,
            allowNull: false
        },
        GrindingAngle:{
            type: DataTypes.STRING,
            allowNull: false
        },
        LoG:{
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
        ODg:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MALSTube1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MALSTube1Quant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MALSTube2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MALSTube2Quant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MALSTube3:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MALSTube3Quant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPODDisk:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPThicknessDisk:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPIdBush:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPThicknessBush:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPODBush:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPHoleF:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SSEPLoBush:{
            type: DataTypes.STRING,
            allowNull: false
        },
        upto:{
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Grinding;
}