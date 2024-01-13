//imports
const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const { PORT } = require("./constants");
const routes = require("./router");

//local variables
const app = express();

// configs
expressConfig(app);
handlebarsConfig(app);

//routing
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
