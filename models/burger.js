// let orm = require("../config/orm.js");

//call ORM function using burger specific input for orm
let burger={
    all: function(callback){
      console.log(callback);
      orm.selectALL("*","burgers", callback)
    },
    create: function(name,callback){
      orm.createOne(name,false,callback)
    },
    //need to make sure this works with format in ORM.JS
    update: function(id,callback){
      let condition = "id " + id;
      orm.updateOne({devoured: true},condition,callback)
    }
};

module.exports = burger;//ORM FUNCTIONS
