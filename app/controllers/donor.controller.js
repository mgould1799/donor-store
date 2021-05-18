const Donor = require("../models/donor.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body || req.body.length == 0) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Customer
  const donor = new Donor({
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state, 
    country: req.body.country, 
    poastal_code: req.body.poastal_code, 
    phone_number: req.body.phone_number, 
    email: req.body.phone_number,
    preferred_payment: req.body.preferred_payment, 
    preferred_form_contact: req.body.preferred_form_contact
  });

  // Save donor in the database
  Donor.create(donor, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Donor."
      });
    else res.send(data);
  });
};

// Retrieve all Donors from the database.
exports.findAll = (req, res) => {
  Donor.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving donors."
      });
    else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};