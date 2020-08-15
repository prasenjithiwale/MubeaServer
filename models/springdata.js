module.exports = (sequelize, DataTypes) => {
    const SpringData = sequelize.define("SpringData", {
        PartNo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Customer:{
            type: DataTypes.STRING,
            allowNull: false
        },
        PartName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        WireDiameter:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Process:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Material:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ID02:{
            type: DataTypes.STRING,
            allowNull: false
        },
        OD02:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Lo:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        Lc:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        nt01:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        F1:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        F2:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        GrossWeight:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        SpringsEngine:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Chamfering:{
            type: DataTypes.STRING,
            allowNull: false
        },
        upto:{
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return SpringData;
}