module.exports = (sequelize,DataTypes) =>{

    const Contacts = sequelize.define("Contacts",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },

        phone_number :{
            type: DataTypes.STRING,
            allowNull: false
        },        
       

    });

    Contacts.associate = (models) => {
        
        Contacts.belongsTo(models.Users, {
          foreignKey: "Users.id",
        });

        Contacts.hasOne(models.Address, {
            foreignKey: "Contacts.id",
          });
        
    } 
   

    return Contacts

}