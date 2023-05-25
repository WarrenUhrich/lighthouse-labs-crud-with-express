/////////////////////////////////////////////////////////////////////////////////
// Configuration
/////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const morgan = require('morgan');

const PORT = 8080;
const app = express();
app.set('view engine', 'ejs');

/////////////////////////////////////////////////////////////////////////////////
// Database
/////////////////////////////////////////////////////////////////////////////////

const pets = {
    Quorra: {name: 'Quorra', age: 1.5, type: 'dog'},
    Donut:  {name: 'Donut',  age: 5,   type: 'dog'},
    Kitten: {name: 'Kitten', age: 13,  type: 'cat'},
    Whisky: {name: 'Whisky', age: 10,  type: 'cat'},
    Shaggy: {name: 'Shaggy', age: 5,   type: 'dog'},
    Zuko:   {name: 'Zuko',   age: 3,   type: 'cat'},
    Woody:  {name: 'Woody',  age: 2,   type: 'dog'},
    B:      {name: 'B',      age: 6.5, type: 'dog'},
    Stashe: {name: 'Stashe', age: 3,   type: 'cat'}
};

/////////////////////////////////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////////////////////////////////

app.use(morgan('dev')); // Logs requests in our terminal
app.use(express.urlencoded({extended: true})); // Parses url-encoded data in requests

/////////////////////////////////////////////////////////////////////////////////
// Listener
/////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
});

/////////////////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////////////////

/**
 * Experiment Routes
 */

// PING!
app.get('/ping', (req, res) => {
    res.status(200).end('PONG!');
});


/**
 * CREATE
 */

// CREATE: show create pet form
app.get('/pets/new', (req, res) => {
    res.render('pets/new');
});

// SAVE: submit create pet form
app.post('/pets', (req, res) => {
    const petInfo = req.body;
    console.log('petInfo (post form submission received)', petInfo);

    const newPet = petInfo;
    newPet.age = Number(newPet.age);

    pets[newPet.name] = newPet;

    console.log('Updated pets variable:', pets);

    res.redirect(`/pets/${newPet.name}`); // Redirect will always be a basic GET request
});

/**
 * READ
 */

// INDEX: display all pets
app.get('/pets', (req, res) => {
    const templateVariables = {
        PI: 3.14,
        pets: pets
    };
    res.render('pets/index', templateVariables); // It looks in /views folder, specify path starting there
});

// SHOW: show single pet
app.get('/pets/:petName', (req, res) => {
    const petKey = req.params.petName; // The value from :key is stored in this property

    const pet = pets[petKey];

    const templateVariables = {
        pet: pet
    };
    res.render('pets/show', templateVariables); // It looks in /views folder, specify path starting there
});

/**
 * UPDATE
 */

// EDIT: show edit pet form
app.get('/pets/:petName/edit', (req, res) => {
    const petKey = req.params.petName; // The value from :key is stored in this property

    const pet = pets[petKey];

    const templateVariables = {
        pet: pet
    };

    res.render('pets/edit', templateVariables);
});

// UPDATE: submit edit pet form
app.post('/pets/:petName', (req, res) => {
    // const petKey = req.params.petName;

    const petInfo = req.body;
    console.log('petInfo (post form submission received)', petInfo);

    const newPet = petInfo;
    newPet.age = Number(newPet.age);

    pets[newPet.name] = newPet;

    console.log('Updated pets variable:', pets);

    res.redirect(`/pets/${newPet.name}`); // Redirect will always be a basic GET request
});

/**
 * DELETE
 */

app.post('/pets/:petName/delete', (req, res) => {
    const petKey = req.params.petName;
    
    delete pets[petKey];

    res.redirect('/pets');
});
