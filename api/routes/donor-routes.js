'use strict';
module.exports = function(app) {
  var donor = require('../controllers/donorController');

  // todoList Routes
  app.route('/donor')
    .get(donor.list_all_donors)
    .post(donor.create_a_donor);


  app.route('/donors/:donorId')
    .get(donor.get_a_donor);
};