let express = require("express");
// let burger = require("../models/burger.js");
let path = require("path");
const app = express();
// const port = 8889;

module.exports = function(app) {

  //============================================
  //=============== API ROUTES  ================
  //============================================

  //============================
  //======= GET REQUEST ========
  //============================

  app.get("/", function(req, res) {
          res.redirect("/burgers")
  })

  app.get("/burgers", function(req, res) {
        console.log("Hit route");
        //funciton to select all from burgers table
        .all(function(data) {
          console.log("Console log for data")
          console.log(data)
          //res.json(data);
          //then send to HANDLEBARS
          res.render("index", {
            burgerToDevour: data
          })
        })
  });

  //============================
  //======= POST REQUEST =======
  //============================
  app.post("/burgers/new", function(req, res) {
    console.log(req.body);
    //select name, if devoured and date from AJAX call from HTML and create for database
        .create(req.params.burger_name, function(result){
            console.log(result);
            res.redirect("/");
        });
  });


  //============================
  //======= PUT REQUEST =======
  //============================
  app.put("/burgers/update", function(req,res){
      .update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
      })
  });

  //============================================
  //=============== TEST ROUTE  ================
  //============================================
  // app.get("/", function(req, res) {
  //   //test for HTML CONNECTION
  //   res.sendFile(path.join(__dirname, "../public/test.html"));
  //   //SHOULD HAVE HANDLEBARS HTML INSERTED HERE
  // });


};
