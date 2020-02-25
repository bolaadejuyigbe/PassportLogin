const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const flash = require ('connect-flash')
const session = require('express-session');

const app = express();


//db cofig 

const db = require('./config/key').MONGOURI;

//initiate a mongo connection
mongoose.connect(db, {useNewUrlParser : true, useUnifiedTopology: true })
.then(() => console.log('Mongo Db Connected...'))
.catch( err =>{
    console.log(err)
})

//Ejs
app.use(expressLayouts);
app.set('view engine', 'ejs')


//bodyparser
app.use(express.urlencoded({extended : false}))

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

  // Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));


const port = process.env.PORT || 3000
app.listen(port, console.log(`Server started on port 3000 ${port}`))