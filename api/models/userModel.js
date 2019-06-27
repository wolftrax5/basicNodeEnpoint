'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  id: {
    type: String,
    required: 'Kindly enter the id of the user'
  }
});

module.exports = mongoose.model('User', UserSchema);