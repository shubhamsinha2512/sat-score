const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');


const SchoolSchema = new Schema({
    'School_ID':String,
    'School_Name':String,
    'Borough':String,
    'Building_Code':String,
    'Street_Address':String,
    'City':String,
    'State':String,
    'Zip_Code':String,
    'Latitute':String,
    'Longitude':String,
    'Phone_Number':String
})

module.exports = mongoose.model('Schools', SchoolSchema);