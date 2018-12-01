module.exports = (sequelize, DataTypes) => {
   var Burger = sequelize.define('Burger', {
     burger_name: DataTypes.STRING,
     devoured:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
     }
   });
   return Burger;
 };
