const express = require('express');
const morgan = require('morgan'); // logging tool

const PORT = 8080;
const app = express();
app.set('view engine', 'ejs');

///////////////////////////////////////////////////////
// Middleware
///////////////////////////////////////////////////////

app.use(morgan('dev'));

///////////////////////////////////////////////////////
// Database
///////////////////////////////////////////////////////

const database = {
    pet1: {name: 'Quorra',   age: 1, type: 'dog'},
    pet2: {name: 'Marie',    age: 3, type: 'cat'},
    pet3: {name: 'Stanley',  age: 4, type: 'cat'},
    pet4: {name: 'Milly',    age: 4, type: 'dog'},
    pet5: {name: 'Tobi',     age: 2, type: 'dog'}
};

///////////////////////////////////////////////////////
// Routes
///////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.end('hello!');
});

/**
 * READ
 */

// INDEX (ALL PETS)
app.get('/pets', (req, res) => {
    const templateVars = {
        pi: 3.14,
        pets: database // our DB object
    };

    // 2 args: EJS PATH, Template Variables OBJ
    res.render('pets/index', templateVars);
});

// SHOW (INDIVDUAL PET)
app.get('/pets/:id', (req, res) => {
    // console.log('req.params:', req.params);
    const petID = req.params.id;

    const pet = database[petID];
    
    const templateVars = {
        pet: pet
    };

    res.render('pets/show', templateVars);
});

///////////////////////////////////////////////////////
// Server Listening...
///////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('🎉 Express Server is now running on port:', PORT);
});
