require('dotenv').config();
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URI);

const testDbConnection = async()=>{
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully! 😻 ");
    } catch (error) {
        console.log("Unable to connect the database : ", error);
    }
}

module.exports = {sq: sequelize, testDbConnection};