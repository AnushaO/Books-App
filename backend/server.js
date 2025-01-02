const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Route to fetch books data from Google Books API
app.get('/api/books', async (req, res) => {
    const query = req.query.query || 'react';
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        res.json(response.data.items);
    } catch (error) {
        res.status(500).send('Error fetching books data');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
