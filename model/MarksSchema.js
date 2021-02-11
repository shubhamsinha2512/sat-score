const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const MarksSchema = new Schema({
    'School_ID':String,
    'Start_Time':String,
    'End_Time':String,
    'Student_Enrollment':String,
    'Percent_White':String,
    'Percent_Black':String,
    'Percent_Hispanic':String,
    'Percent_Asian':String,
    'Average_Math':String,
    'Average_Reading':String,
    'Average_Writing':String,
    'Percentage_Tested':String
})

module.exports = mongoose.model('Marks', MarksSchema);