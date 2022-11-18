require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const PORT = process.env.port || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
