module.exports = app => {
  const donors = require("../controllers/donor.controller.js");

  // Create a new Donor
  app.post("/donors", donors.create);

  // Retrieve all Donors
  app.get("/donors", donors.findAll);

  // Retrieve a single Donor with donorId
  app.get("/donors/:donorId", donors.findOne);

  // Update a Donor with donorId
  app.put("/donors/:donorId", donors.update);

  // Delete a Donor with donorId
  app.delete("/donors/:donorId", donors.delete);

  // Create a new Donor
  app.delete("/donors", donors.deleteAll);
};