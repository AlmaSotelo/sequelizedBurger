### Homework wk-16 "SequelizedBurger"
   This Web-app uses Node-mySQL-Handlebars-Sequelize.
## Objetive
   The main gold of this app is to show the basic use of sequelize instead of the manual ORM used in the past buerger app.
   ![app's shotscreen](forReadme.png)   
*  CONSTRUCCION:
   1) Use burger app as a starting point,
   2) Add sequelize and sequelize CLI to the package.json by running *npm install -g sequelize sequelize-cli*. Also run *npm install*, to make sure all of our dependencies are in node-modules folder.
   3) Initialize Sequelize inside the working folder by running *sequelize init:models & sequelize init:config*
   4) Navigate to the config folder, open `config.json`, and modify the development object's "database","username" and "password" values, if needed, to match your MYSQL database on your machine. Include the database port number, if not using the default.
   5) *sequelize init:models* automaticly created `index.js` inside the folder models.
   6) In `burgers.js`(inside models folder) delete content and fill it with new code. Refer to sequelize documentation for this. 
   7) In `server.js` require folder models, and add code to sync the sequelize models.
   8) Change the `burgers_controller.js` file from referencing the old ORM code to sequelize code. 
     - Comment the old code for insertOne and for updateOne to test it.
     - Add new code to create and update.
