module.exports = (sequelize,DataTypes) =>{

    const Address = sequelize.define("address",{
        address_line1 :{
            type: DataTypes.STRING,
            allowNull: false
        },

        address_line2 :{
            type: DataTypes.STRING,
            allowNull: true
        },

        state :{
            type: DataTypes.STRING,
            allowNull: true
        },

        country :{
            type: DataTypes.STRING,
            allowNull:false
        }

    });

    return Address

}