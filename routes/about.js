const express = require('express');
const router = express.Router();

app.get('/about', (req, res) => {
   
      res.render('about');
    
});


module.exports = router;
