const express = require('express');
const app = express();
const port = 3000;

app.get('/health', function (req, res) {
    res.status(200);
    res.send('Good connection');
});

app.get('/trends/', function (req, res) {
    res.send("All company trends");
});

app.get('/trends/:company', function (req, res) {
    res.send("Trend for company: " + req.params.company);
});

app.listen(port, () => console.log(`API listening on port ${port}!`))