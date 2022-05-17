const express = require('express');
const morgan = require('morgan');

const PORT = 3000;
const app = express();

// Set up our templating engine / view engine.
app.set('view engine', 'ejs');

//////////////////////////////////////////////////////////////////////
// Middlewares...
//////////////////////////////////////////////////////////////////////

app.use(morgan('dev'));

//////////////////////////////////////////////////////////////////////
// Database...
//////////////////////////////////////////////////////////////////////

const petsDB = [
    {name: 'Lola', age: 7, type: 'dog'},
    {name: 'Albert', age: 25, type: 'dog'},
    {name: 'Sonic', age: 17, type: 'hedgehog'},
    {name: 'B52', age: 100, type: 'Lobster'},
    {name: 'Dracarys', age: 50, type: 'dragon'},
    {name: 'Noodle', age: 3 , type: 'ball python'}
];

//////////////////////////////////////////////////////////////////////
// Routes...
//////////////////////////////////////////////////////////////////////

/**
 * Index (Read All)
 */
app.get('/', (req, res) => {
    res.render('index', {petsDB: petsDB});
});

/**
 * Create (Show Form)
 */
app.get('/new', (req, res) => {
    res.render('new');
});

//////////////////////////////////////////////////////////////////////
// Server listening...
//////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('CRUD Express app listening on port:', PORT);
});
