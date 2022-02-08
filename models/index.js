const dbConfig = require('../config/db.config.js');

const {Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.Hostname,
        dialect: dbConfig.dialect,        
    }     
)

sequelize.authenticate()
.then(()=>{
    console.log("Connected..")
})
.catch(err=>{
    console.log(" error" + err)
})

const db = {}

db.Sequelize = Sequelize

db.sequelize = sequelize

db.address = require('./address.models.js')(sequelize, DataTypes)
db.contacts = require('./contact.models.js')(sequelize, DataTypes)
db.users = require('./users.models.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})  // if true loss data everytime running app
.then(()=> {
    console.log('sync is done')
})


db.users.associate = (db) => {
    db.users.hasMany(db.contacts,{ foreignKey: 'contact_details.id', as:'contacts'})
}

db.contacts.associate = (db) => {
    db.contacts.hasMany(db.address,{foreignKey: 'address.id', as:'address'})
    db.contacts.belongsTo(db.users, { foreignKey: 'users.id', as: 'users' });
   
};

db.address.associate = (db) => {
    db.address.belongsTo(db.contacts, { foreignKey: 'contacts.id', as: 'contacts' });
};


module.exports = db