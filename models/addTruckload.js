module.exports = function(sequelize, DataTypes) {
    var truckloads = sequelize.define("Truckloads", {
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
            validate: {
                len: [1]
            }
        },
        pickUpNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        poNumber:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        additionalInfo: {
        type: DataTypes.STRING,
        allowNull: true,
        }
    });
    return truckloads;
}