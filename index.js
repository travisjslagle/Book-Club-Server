require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');

// DATABASE
sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));

// CONTROLLERS
const user = require('./controllers/usercontroller');
const book = require('./controllers/bookcontroller');
const thread = require('./controllers/threadcontroller');
const post = require('./controllers/postcontroller');
const task = require('./controllers/taskcontroller');


// EXPOSED ROUTES
app.use('/user', user);


// PROTECTED ROUTES
app.use(require('./middleware/validate-session'));
app.use('/book', book);
app.use('/thread', thread);
app.use('/post', post);
app.use('/task', task);

app.listen(process.env.PORT, function(){
    console.log(`Server is running on ${process.env.PORT}`)
})