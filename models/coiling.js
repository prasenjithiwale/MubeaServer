module.exports = (sequelize, DataTypes) => {
    const Coiling = sequelize.define("Coiling", {
        OEM:{
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
        WireDiameter:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Process:{
            type: DataTypes.STRING,
            allowNull: false
        },
        WGCoilingMachine:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        CoilingSpeed:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Loc:{
            type: DataTypes.STRING,
            allowNull: false
        },
        IdC:{
            type: DataTypes.STRING,
            allowNull: false
        },
        OdC:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPnt:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPntQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPIDMandrel:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPIDMandrelQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPODBush:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPODBushQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPLengthM:{
            type: DataTypes.STRING,
            allowNull: false
        },
        LengthMQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPPitchTool:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPPitchToolQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPImessBushLo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPImessBushOD:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPImessBushQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        WGENFeedRoller:{
            type: DataTypes.STRING,
            allowNull: false
        },
        WGENFRQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        WTHGWireGuide:{
            type: DataTypes.STRING,
            allowNull: false
        },
        WTHGWGQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        CoilingPin:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ENCutterInserts:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ENCIQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ENCoilingMandrel:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ENCMQuant:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        KEBPCuttingKnifel:{
            type: DataTypes.STRING,
            allowNull: false
        },
        KEBPPitchTooll:{
            type: DataTypes.STRING,
            allowNull: false
        },
        temprature:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MMXGQuant:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MMXGLTotal:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MMXGL1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MMXGL2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MMXGOD1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MMXGOD2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        MMXGOD3:{
            type: DataTypes.STRING,
            allowNull: false
        },
        upto:{
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Coiling;
}