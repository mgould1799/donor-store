'use strict';


// Donor = mongoose.model('Tasks');

exports.list_all_donors = function(req, res) {
  console.log(req)
  res.json({message: "test"})
};

exports.create_a_donor = function(req, res) {
  console.log(req)
  res.json({message: "test"})
};


exports.get_a_donor = function(req, res) {
    console.log(req)
    res.json({message: "test"})
};