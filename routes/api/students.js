// bring in Express to use features
const express = require('express');

// use Express Router
const router = express.Router();

// bring in the student model to make quries to the mongoDB
const Student = require('../../models/Student');

//// create routes
// @route       GET api/students
// @desc        Get All Students
// @access    Public
// instead of app.get() like we would do in server.js, we use the express router
// this .get() starts at the end of /api/students because of how we setup server.js
// so when we use this with axios, we will do --> axios.get('/api/students').then()...
router.get('/', (req, res) => {
        //fetch all students from DB
        //take model called 'Student'
        Student.find() // returns a Promise
                //.sort({ quiz1_1: -1 }) // mongoose can sort by descending (-1) or ascending (1)
                .then(students => res.json(students)); // JSON api that we make readable
});

// @route       POST api/students
// @desc        Create an student
// @access    Public
// instead of app.post() like we would do in server.js, we use the express router
// this .post() starts at the end of /api/students because of how we setup server.js
// so we will use it as --> axios.post('/api/students', student).then()...
router.post('/', (req, res) => {
        // construct an object to insert into the DB
        const newStudent = new Student({
                name: req.body.name,
                email: req.body.email,
                quiz1_1: req.body.quiz1_1,
                quiz1_2: req.body.quiz1_2
        }); // 'Student() is using our model created above connected to StudentSchema

        // console.log('Student: ', Student);
        Student.createIndexes( { email: 1 }, {unique:true} );
        // NOTE: when method below is used, it will apply this index to the db, but it will persist even
        // if email and it's unique requirement are removed. Then will throw an error. So you would either need
        // to delete the index from mLab or wherever you access the mongoDB, or find a way to run a script in here
        // that would remove the index.
        // https://stackoverflow.com/questions/39988941/mongodb-e11000-duplicate-key-error
        // find out of user already exists with that email, if exists send message stating so
        // if no user exists with that email, then add student
        // Student.once('email', error => {
        //     assert.ifError(error);
        //     Student.create(newStudent, error => {
        //       // Will error, but will *not* be a mongoose validation error, it will be
        //       // a duplicate key error.
        //       assert.ok(error);
        //       assert.ok(!error.errors);
        //       assert.ok(error.message.indexOf('duplicate key error') !== -1);
        //     });
        //   });

        newStudent.save() // saves new Student to the DB
                .then(student => res.json(student)); // Promise based, gives us back the student that it's saving
});
//// USING Postman ////
// change to 'POST'
// go to Header:
//      key: Content-Type, value: application/json
// go to Body:
//      when using JSON, the keys and values should be in double quotes "keys", "values"
//      use raw
/*      {
                "name": "pasta"
        }
*/

// @route       DELETE api/students/:id <-- replace :id with ${id} when in use
// @desc        Delete an student
// @access    Public
// instead of app.post() like we would do in server.js, we use the express router
// this .post() starts at the end of /api/students because of how we setup server.js
// so will be used like this with axios --> axios.delete(`/api/students/${id}).then()...
router.delete('/:id', (req, res) => {
        // find student by id first, we have to fetch id from params
        Student.findById(req.params.id)
                .then(student =>
                        student.remove().then(() => {
                                // Promised base (what does remove return?) whose method is this?
                                res.json({
                                        success: true
                                });
                        })
                )
                .catch(err => res.status(404).json({ success: false }));
});

// export default router
module.exports = router;