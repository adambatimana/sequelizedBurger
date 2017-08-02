

module.exports = function(sequelize, DataTypes){
    let burgers = sequelize.define("Burgers", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN,
        date: DataTypes.CURRENT_TIMESTAMP
    });
      return burgers;
};
