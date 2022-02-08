module.exports = (sequelize,DataTypes) =>{

    const Contacts = sequelize.define("contacts",{
        address:{
            type: DataTypes.STRING,
            allowNull: true
        },

        phone_number :{
            type: DataTypes.STRING,
            allowNull: false
        },

        emergency_contact_user :{
            type: DataTypes.STRING,
            allowNull: true
        }

    });

 
    return Contacts

}