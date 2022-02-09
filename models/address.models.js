
module.exports = (sequelize,DataTypes) =>{

    const Address = sequelize.define("Address",{
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
            type: DataTypes.ENUM({values:["IN", "US", "CA"]}),            
            allowNull:false
        },


    });
    
    Address.associate = (models) => {
        Address.belongsTo(models.Contacts, {
          foreignKey: "Contacts.id",
        });
      }

    return Address

}