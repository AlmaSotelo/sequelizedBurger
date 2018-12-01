// Dependencies
var express = require('express');
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var db = require("../models/");

// Create all our routes and set up logic within those routes where required.
  //GET request to grab database contents
router.get("/", function(req, res) { //base route
  db.Burger.findAll({}) //in the database get the "Burger" model and find all of them...
  .then(function(dbBurger) { //then returns the object as "Burger" 
    var hbsObject = {burger: dbBurger };
    //res render it in handlebars ("index" is in the views folder)
    res.render("index", hbsObject); 
     
  });
});
router.post("/burgers/add", function(req, res){
  console.log(req.body);
  db.Burger.create(req.body).then(result => {
    res.redirect("/");
  })
})
router.put("/burgers/update", function(req, res){
  console.log(req.body)
  db.Burger.update({devoured: true}, {where: {id : req.body.burger_id}})
  .then(result => {
    res.redirect("/");
  })
})

// Export routes for server.js to use.
module.exports = router;