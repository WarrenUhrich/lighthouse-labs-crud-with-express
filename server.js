const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.end('<html><head></head><body><h1>Hello, World!</h1></body></html>');
});

app.listen(PORT, () => {
    console.log('CRUD Express app listening on port:', PORT);
});
