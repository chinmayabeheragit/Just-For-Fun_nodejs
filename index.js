require('dotenv').config();
const express = require('express');
const app = express();

// Use the PORT from .env without a fallback
const port = process.env.PORT;

if (!port) {
    throw new Error("PORT is not defined in the .env file");
}

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/twitter', (req, res) => {
    res.send('stark.com');
});

app.get('/login', (req, res) => {
    res.send('<h1>Stark Home</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai Or Code</h2>');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
