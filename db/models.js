const Sequelize = require('sequelize')
const config = require('../config.js')
const DataTypes = Sequelize.DataTypes;

const db  = new Sequelize(config.DATABASE_URI);

const Item  = db.define('item',{

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },

    stuff: {
        type: DataTypes.TEXT,
    }

});

db.sync({
    alter:true

})
    .then(()=>{[
        console.log("DB synced")
    ]})
    .catch((err)=>console.log(err))

exports = module.exports = {
    Item
}



