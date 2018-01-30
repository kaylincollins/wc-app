const mongoose = require('mongoose');
require('./index');

mongoose.Promise = global.Promise;

const formSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  phone: String,
  email: String,
  ftn: String,
  instructorName: String,
  instructorPhone: String,
  instructorEmail: String,
  date: String,
  time: String,
  airport: String,
  aircraft: String,
  rating: String,
  retest: String,
  discontinuance: String,
  payment: String,
  meetingLocation: String,
  tailNumber: String,
  submission: String
});

const Form = mongoose.model('Form', formSchema);

module.exports.Form = Form;

module.exports.fetchAllForms = (req, res) => {
  Form.find()
    .catch(() => console.log('error'))
    .then(data => {
      res.send(JSON.stringify(data));
    });
};

module.exports.saveForm = (req, res, next) => {
  const newForm = new Form({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    ftn: req.body.ftn,
    instructorName: req.body.instructorName,
    instructorPhone: req.body.instructorPhone,
    instructorEmail: req.body.instructorEmail,
    date: req.body.date,
    time: req.body.time,
    airport: req.body.airport,
    aircraft: req.body.aircraft,
    rating: req.body.rating,
    retest: req.body.retest,
    discontinuance: req.body.discontinuance,
    payment: req.body.payment,
    meetingLocation: req.body.meetingLocation,
    tailNumber: req.body.tailNumber,
    submission: req.body.submission
  });
  newForm.save()
    .catch(() => console.log('Error with saving to database'))
    .then(() => next());
};
