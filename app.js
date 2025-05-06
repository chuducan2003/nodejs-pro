const { log } = require("console");
const express = require("express");

const app = express();
const PORT = 8080;
app.get("/ducandev", (req, res) => {
    res.send("Hello ducan");
});

app.listen(8080, () => {
    console.log(`My app is running on port: ${PORT}`);
});
