const express = require('express');
const expressLayouts = require('express-ejs-layouts')

const app = express();

//Ejs
app.use(expressLayouts);
app.set('view engine', 'ejs')

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));


const port = process.env.PORT || 3000
app.listen(port, console.log(`Server started on port 3000 ${port}`))