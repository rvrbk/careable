const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('demo'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Careable listening at http://localhost:${port}`);
});