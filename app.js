const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dirname = path.join(__dirname, 'images');
//const cookieParser = require('cookie-parser');
const data = require('./data.json');
const app = express();

//console.log(data);
//console.log(data.projects);
app.use(bodyParser.urlencoded({ extended: false}));
//app.use(cookieParser());


//const mainRoutes = require('./routes');
//const aboutRoutes = require('./routes/about');

app.use('/static', express.static('public'));
app.use('/images', express.static('images'));

app.get('/images',(req, res) => {
  console.log(dirname);
})

//app.use(mainRoutes);
//app.use('/about', aboutRoutes);

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index',{data: data.projects})
 
});
console.log(data.projects[0].id);
app.get('/about', (req, res) => {
   
  res.render('about');

});
app.get('/layout',(req, res) => {
  res.render('layout');
})
  app.get('/project/:id', (req, res) => {
    res.render('project',{id: req.params.id, data: data.projects});
   });
console.log(('/images/'+data.image_url));
   app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
  });


   
   app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
   });