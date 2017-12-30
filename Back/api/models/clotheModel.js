
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ClotheSchema = new Schema({
  name: {
    type: String,
    // required: 'Kindly enter the name of the task'
  },
//   Created_date: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: [{
//       type: String,
//       enum: ['pending', 'ongoing', 'completed']
//     }],
//     default: ['pending']
//   }, 

}, {
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Clothes', ClotheSchema);