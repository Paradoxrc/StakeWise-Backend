require("dotenv").config();
const express = require("express");
const app = express();

const dbConfig = require("./config/dbConfig");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    console.log("Server started on port 4000");
}); 

process.env