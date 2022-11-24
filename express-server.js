const express = require('express');
const morgan = require('morgan'); // logging tool

const PORT = 8080;
const app = express();

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
    const webString = `
        <!DOCTYPE html>
        <html>
            ${}
        </html>
    `;
    res.end(JSON.stringify(database));
});

///////////////////////////////////////////////////////
// Server Listening...
///////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('🎉 Express Server is now running on port:', PORT);
});
