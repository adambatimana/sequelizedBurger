let express = require("express");
let path = require("path");
const app = express();
let db = require("../models/burger.js");

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
        console.log(db.Burgers)
            // .findAll({}).then(function(dbBurger) {
            //     // We have access to the todos as an argument inside of the callback function
            //     res.json(dbBurger);
            // });

        //     //then send to HANDLEBARS
        //     res.render("index", {
        //         burgerToDevour: burgerData
        //     })
        // })
    });

    //============================
    //======= POST REQUEST =======
    //============================
    app.post("/burgers/new", function(req, res) {

        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured,
            date: req.body.date
        }).then(function(dbburger) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbburger);
        });
        //select name, if devoured and date from AJAX call from HTML and create for database
        db.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured,
            date: req.body.date
        }).then(function(burgerTodo) {
            console.log(burgerTodo);
            res.redirect("/");
        });
    });


    //============================
    //======= PUT REQUEST =======
    //============================
    app.put("/burgers/update", function(req, res) {
        db.update({}).then(function(burgerUpdate) {
            console.log(burgerUpdate);
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