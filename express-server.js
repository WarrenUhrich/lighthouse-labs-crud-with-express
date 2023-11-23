// npm install express ejs morgan

/////////////////////////////////////////////////////////////////////////////////
// Configuration
/////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const morgan = require('morgan');

const PORT = 8080;
const app = express();
app.set('view engine', 'ejs');

/////////////////////////////////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////////////////////////////////

app.use(morgan('dev')); // Logs request data in our terminal
app.use(express.urlencoded({extended: true})); // Parses url-encoded data in requests

/////////////////////////////////////////////////////////////////////////////////
// Listener
/////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('Express server is listening on port:', PORT);
});

/////////////////////////////////////////////////////////////////////////////////
// Database
/////////////////////////////////////////////////////////////////////////////////

const pets = {
    Kane: { name: 'Kane', type: 'Dog' },
    Quorra: { name: 'Quorra', type: 'Dog', age: 2 },
    Shadow: { name: 'Shadow', type: 'Rabbit', age: 5 },
    Booboo: { name: 'Booboo', type: 'Cat' },
    Ryder: { name: 'Ryder', type: 'Dog' },
    Mia: { name: 'Mia', type: 'Cat' },
    Keke: { name: 'Keke', type: 'Dog', age: 10 }
};

/////////////////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////////////////

/* I  GET   /pets              # Show all pets */
app.get('/pets', (req, res) => {
    const templateVar = {
        pets: pets
    };

    res.render('pets/index', templateVar);
});

/* C  GET   /pets/new          # Show new pet form */
app.get('/pets/new', (req, res) => {
    res.render('pets/new');
});

/* R  GET   /pets/:name        # Show info about this pet */
app.get('/pets/:name', (req, res) => {
    // console.log('req.params:', req.params);

    const name = req.params.name;

    const pet = pets[name];

    // If there is no pet... let the user know!
    if(!pet) { return res.status(404).end('Pet not found'); }

    const templateVar = {
        pet: pet
    };

    res.render('pets/read', templateVar);
});

/* U  POST  /pets/:name        # Submission of edit form */
app.post('/pets/:name', (req, res) => {
    // Values from EDIT PET form...
    const name = req.body.name;
    const type = req.body.type;
    const age = parseInt(req.body.age);

    const pet = pets[name];

    // Save new values to existing pet...
    pet.name = name;
    pet.type = type;
    pet.age = age;

    res.redirect(`/pets/${name}`);
});

/* D  POST  /pets/:name/delete # Submission of delete form */
app.post('/pets/:name/delete', (req, res) => {

    const name = req.params.name;

    // console.log('pets before delete:', pets);

    delete pets[name];

    // console.log('pets after delete:', pets);

    res.redirect('/pets');
});

/* E  GET   /pets/:name/edit   # Show edit pet form */
app.get('/pets/:name/edit', (req, res) => {
    const name = req.params.name;

    const pet = pets[name];

    // If there is no pet... let the user know!
    if(!pet) { return res.status(404).end('Pet not found'); }

    const templateVar = {
        pet: pet
    };

    res.render('pets/edit', templateVar);
});

/* S  POST  /pets              # Submission of create/new form */
app.post('/pets', (req, res) => {
    // console.log('req.body:', req.body);

    // Values from NEW PET form...
    const name = req.body.name;
    const type = req.body.type;
    const age = parseInt(req.body.age);

    // Create a new pet object...
    const newPet = {
        name: name,
        type: type,
        age: age
    };

    // Save pet into our pets object...
    pets[name] = newPet;

    // Check that all the old pets and new pet are present...
    console.log(pets);

    res.redirect(`/pets/${name}`);
});
