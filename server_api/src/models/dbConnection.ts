// -------------------------------DB connection start-----------------------------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var myDB = 'mongodb://127.0.0.1/nk_shop';
mongoose.Promise = require('bluebird');

mongoose.connect(myDB, {useMongoClient: true});



var connection = mongoose.connection;

connection.on('connected',()=>{console.log("DB connected")});
connection.on('disconnected',()=>{console.log("DB connected")});
connection.on('error',()=>{console.log("DB connected")});
process.on('SIGINT',()=>{ connection.console(
    ()=>{
    console.log('db connection closed due to process terminated');
    process.exit(0);
    }) 
});
module.exports = connection;
// --------------------------------DB connection End----------------------------------------------
