//imports
const express = require("express");

const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const dbConnect = require("./config/dbConfig");

const { PORT } = require("./constants");
const routes = require("./router");

//local variables
const app = express();

// configs
expressConfig(app);
handlebarsConfig(app);

//connecting to the database
dbConnect()
  .then(() => {
    console.log("Successfuly connected to the DB");
  })
  .catch((err) => {
    console.log(`error while connecting in DB: ${err}`);
  });

//routing
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
