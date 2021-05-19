const sql = require("./db.js");

// constructor
const Donor = function(donor) {
  this.last_name = donor.last_name; 
  this.first_name = donor.first_name; 
  this.street_address = donor.street_address; 
  this.city = donor.city; 
  this.state = donor.state; 
  this.country = donor.country; 
  this.poastal_code = donor.poastal_code;
  this.phone_number = donor.phone_number;
  this.email = donor.email; 
  this.preferred_payment = donor.preferred_payment; 
  this.preferred_form_contact = donor.preferred_form_contact;
  this.frequency_of_donation = donor.frequency_of_donation;
  this.amount = donor.amount; 
  this.currency = donor.currency; 
  this.comment = donor.comment; 
};

Donor.create = (newdonor, result) => {
  sql.query("INSERT INTO donors SET ?", newdonor, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created donor: ", { id: res.insertId, ...newdonor });
    result(null, { id: res.insertId, ...newdonor });
  });
};

Donor.findById = (donorId, result) => {
  sql.query(`SELECT * FROM donors WHERE id = ${donorId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found donor: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found donor with the id
    result({ kind: "not_found" }, null);
  });
};

Donor.getAll = result => {
  sql.query("SELECT * FROM donors", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("donors: ", res);
    result(null, res);
  });
};

// this query needs to be updated
Donor.updateById = (id, donor, result) => {
  sql.query(
    "UPDATE donors SET email = ?, name = ?, active = ? WHERE id = ?",
    [donor.email, donor.name, donor.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found donor with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated donor: ", { id: id, ...donor });
      result(null, { id: id, ...donor });
    }
  );
};

Donor.remove = (id, result) => {
  sql.query("DELETE FROM donors WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found donor with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted donor with id: ", id);
    result(null, res);
  });
};

Donor.removeAll = result => {
  sql.query("DELETE FROM donors", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} donors`);
    result(null, res);
  });
};

module.exports = Donor;