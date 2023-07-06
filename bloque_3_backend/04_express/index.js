const { config } = require("./config")
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

loadEndpoint(app)

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("port", config.port);

app.listen(app.get("port"), () => {
  console.log(
    `[SERVER]: App running on port on http://localhost:${app.get("port")}/`
  );
});