const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

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

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));


const port = process.env.PORT || 3000
app.listen(port, console.log(`Server started on port 3000 ${port}`))