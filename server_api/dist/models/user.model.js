// grab the things we need
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
// create a schema
var userSchema = new Schema({
    name: String,
    username: { type: String },
    password: { type: String },
    admin: Boolean,
}, { collection: 'user' });
// you can also do queries and find similar users 
userSchema.methods.dudify = function () {
    // add some stuff to the users name
    this.name = this.name + '-dude';
    return this.name;
};
// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);
// make this available to our users in our Node applications
module.exports = User;