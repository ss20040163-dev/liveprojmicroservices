// Importing the express module
const express = require('express');

// Creating an instance of Express
const app = express();

// Define an array of artists
const artists = [
    { id: 1, name: 'Frank Sinatra', art: 'New York, New York' },
    { id: 2, name: 'Iron Maiden', art: 'Number of the Beast' },
    { id: 3, name: 'Bryan Adams', art: 'Run to You' }
];

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define a route handler to get all artists
app.get('/api/songs', (req, res) => {
    res.json(artists);
});

// Define a route handler to get an artist by id
app.get('/api/songs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const artist = artists.find(artist => artist.id === id);
    if (artist) {
        res.json(artist);
    } else {
        res.status(404).send('Artist not found');
    }
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
