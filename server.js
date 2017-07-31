// ===============================
// ========= DEPENDENCIES ========
// ===============================

let express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT= 8000;

app.use(express.static(path.join(__dirname, 'public')))
// ===============================
// ===== handlebars/exp setup ====
// ===============================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ===============================
// ===== Require controllers =====
// ===============================
require("./controllers/burgers_controllers.js")(app);

// ===============================
// ===== Turn on PORT/ LISTEN ====
// ===============================
app.listen(PORT, function() {
  console.log("APP listening on PORT " + PORT);
})
