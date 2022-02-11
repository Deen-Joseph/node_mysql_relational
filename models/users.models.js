const userVal = ""

module.exports = (sequelize,DataTypes) =>{

    const Users = sequelize.define("Users",{
      
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
        username :{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              is: /^[a-zA-Z0-9_.-]*$/, 
            }
        },

        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              isEmail: true, 
            }
        },

        password :{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              validatePassword: function(password) {
                if(!(/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password))) {
                    throw new Error('The password must contain at least 6 characters including at least 1 uppercase, 1 lowercase and one special character.');
                }
            }
           }

        },              

    });

    Users.associate = (models) => {
        Users.hasOne(models.Contacts, {
          foreignKey: "userId",
        });
      }

    return Users

}