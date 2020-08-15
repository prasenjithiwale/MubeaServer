module.exports = (sequelize, DataTypes) => {
    const Spcc = sequelize.define("Spcc", {
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
        MAProcess:{
            type: DataTypes.STRING,
            allowNull: false
        },
        GrainSize:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MAHPSNo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        RevolverL1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        RevolverFi:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Color:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SIIDimenClichePlateDimen:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SIIDimenClichePlateQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SIIDimenTamponSideSide:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SIIDimenTamponSideSideQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SIIDimenTamponSideTop:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SIIDimenTamponSideTopQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        upto:{
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Spcc;
}