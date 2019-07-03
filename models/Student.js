// bring in mongoose to shape the structure of our data models
const mongoose = require('mongoose');

// create a 'Schema' which is the shape of our data model
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
        name: {
                type: String,
                required: true
        },
        quiz1_1: {
            type: Number,
            default: 100
        },
        quiz1_2: {
            type: Number,
            default: 100
        }

});

// have to export for access
// create a mongoose model that is supplied the model name and the schema to use
module.exports = Student = mongoose.model('student', StudentSchema);

// will the following work? Check later after it is up and running:
// const Student = mongoose.model('student', StudentSchema);
// module.exports = Student