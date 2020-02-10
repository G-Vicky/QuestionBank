const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello Wolrd');
});

app.get('/home', (req, res) => {
    res.send('Server from home');
});

app.get('/register', (req, res) => {
    res.send('server from register');
});

app.get('/questionpaper/:class', (req, res) => {
    res.send(["Paper1","Paper2","Paper3"]);
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
