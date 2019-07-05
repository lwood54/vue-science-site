// bring in mongoose to shape the structure of our data models
const mongoose = require('mongoose');

// create a 'Schema' which is the shape of our data model
const Schema = mongoose.Schema;

// Create Schema
// Schema types: https://mongoosejs.com/docs/schematypes.html
// If schema created when no documents in the db, then this will set errors, (like email below ie unique: true)
// but if this is added after documents (student) are in the colledtion (students), then this will have to be added
// as an index into the collection manually (i think this is the case)
const StudentSchema = new Schema({
        name: {
                type: String,
                required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        quiz1_1: {
            type: Array, // will have an array of top 10 scores on quiz attempts
            default: null
        },
        quiz1_2: {
            type: Array,
            default: null
        }

});

// have to export for access
// create a mongoose model that is supplied the model name and the schema to use
// 'student' is the singular name of the collection the model is for.
// *Mongoose automatically looks for the plural, lowercase version of your model name.
// https://mongoosejs.com/docs/models.html
// module.exports = Student = mongoose.model('Student', StudentSchema);

// the following is more explicit to me, so I will be going with this format
const Student = mongoose.model('Student', StudentSchema);
module.exports = Student