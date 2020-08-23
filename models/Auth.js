module.exports = (sequelize, DataTypes) => {
    const Auth = sequelize.define("Auth", {
        FullName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        EMPID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Passwd:{
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Auth;
}