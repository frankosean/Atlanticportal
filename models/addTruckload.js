var sequelize = require("sequelize");


module.exports = function(sequelize, DataTypes) {
    var truckloads = sequelize.define("truckloads", {
        lane: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        pickUpDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        pickUpNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        poNumber:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        additionalInfo: {
        type: DataTypes.STRING,
        allowNull: true,
        },
        updatedAt: DataTypes.DATE,
        createdAt: DataTypes.DATEONLY,
    },
    {    
        paranoid: false,
    });
    return truckloads;
}