const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const SortByLangRoutes = require("./routes/SortedByLanguage");

//init app
const app = express();

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

// routes
app.use("/", SortByLangRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV == "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

module.exports = app;
