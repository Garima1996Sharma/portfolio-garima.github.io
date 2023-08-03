const express = require('express');
const router = express.Router();
const data = require('./data.json');

app.get('/', (req, res) => {
    res.render('index',{data: data.projects})
   
});

module.exports = router;