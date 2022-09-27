const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('CIN Portfolio Assignment');
});

app.listen(port, () => {
    console.log(`CIN Portfolio Web listening on port: ${port}`);
});