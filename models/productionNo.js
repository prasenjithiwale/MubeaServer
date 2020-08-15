module.exports = (sequelize, DataTypes) => {
    const ProductionNo = sequelize.define("ProductionNo", {
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
        s2019: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        s2020:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        s2021:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        s2022:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        s2023:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
    });
    return ProductionNo;
}