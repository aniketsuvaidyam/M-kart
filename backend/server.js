const express = require("express");
const app = express();
const port = 4000;
const Cors = require("cors");
app.use(Cors());
const fileUpload = require("express-fileupload");

// db connection
require("./Connection/connectionDB");
// middelwear
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// File uplode
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// all routes
const routes = require("./Routes/routes");
app.use("/api", routes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
