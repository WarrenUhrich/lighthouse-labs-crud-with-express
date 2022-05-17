const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

// Set up our templating engine / view engine.
app.set('view engine', 'ejs');

//////////////////////////////////////////////////////////////////////
// Middlewares...
//////////////////////////////////////////////////////////////////////

app.use(morgan('dev'));
app.use(bodyParser({extended: true}));

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

/**
 * Create (Form Submission)
 */
app.post('/new', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const type = req.body.type;
    const pet = {
        name: name,
        age: age,
        type: type
    };
    // Check if our pet is formed correctly.
    console.log(pet);

    // Add pet to array (our mock database!)
    petsDB.push(pet);

    // Redirect to full list of pets.
    res.redirect('/');
});

/**
 * Update (Show Form)
 */
app.get('/edit/:id', (req, res) => {
    const id = req.params.id;

    const pet = petsDB[id];

    // Checking if pet was retrieved.
    console.log(pet);

    res.render('edit', {id: id, pet: pet});
});

app.post('/edit/:id', (req, res) => {
    // Retrieve existing pet ID.
    const id = req.params.id;

    // Form an updated version of the pet.
    const name = req.body.name;
    const age = req.body.age;
    const type = req.body.type;
    const updatedPet = {
        name: name,
        age: age,
        type: type
    };

    // Replace old pet with new pet object.
    petsDB[id] = updatedPet;

    // Send to index after update.
    res.redirect('/');
});

//////////////////////////////////////////////////////////////////////
// Server listening...
//////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('CRUD Express app listening on port:', PORT);
});
