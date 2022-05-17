const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.end('<html><head></head><body><h1>Hello, World!</h1></body></html>');
});

const petsDB = [
    {name: 'Lola', age: 7, type: 'dog'},
    {name: 'Albert', age: 25, type: 'dog'},
    {name: 'Sonic', age: 17, type: 'hedgehog'},
    {name: 'B52', age: 100, type: 'Lobster'},
    {name: 'Dracarys', age: 50, type: 'dragon'},
    {name: 'Noodle', age: 3 , type: 'ball python'}
];

// &
// q = Node.js Documentation

/** https://www.google.com/search?q=Node.js+Documentation
 * Consider the resources / paths / methods...
 * 
 * CREATE:  GET /new Form for new pet.
 * SAVE:    POST /new Create the new pet.
 * READ:    GET / Index of Pets (Displays All)
 * EDIT:    GET /edit/:id Render populated form.
 * UPDATE:  POST /edit/:id Update pet resource.
 * DELETE:  POST /delete/:id Remove pet resource.
 */

app.listen(PORT, () => {
    console.log('CRUD Express app listening on port:', PORT);
});
