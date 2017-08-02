module.exports = function(sequelize, DataTypes){
    let burgers = sequelize.define("Todo", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN,
        date: DataTypes.CURRENT_TIMESTAMP
    });
      return Todo
};
