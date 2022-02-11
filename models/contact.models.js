module.exports = (sequelize,DataTypes) =>{

    const Contacts = sequelize.define("Contacts",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },

        phone_number :{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              isNumeric: true,
              len:{
                args:[10],
                msg :" Max 10 numbers, no country code required !"
              } 
            }
        },        
       

    });

    Contacts.associate = (models) => {
        
        Contacts.belongsTo(models.Users, {
          foreignKey: "userId",
        });

        Contacts.hasOne(models.Address, {
            foreignKey: "contactsId",
          });
        
    } 
   

    return Contacts

}