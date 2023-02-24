const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile('/login.html', { root: path.join(__dirname) });
});

app.listen(PORT);
console.log("Word Count App Running On Port " + PORT);
