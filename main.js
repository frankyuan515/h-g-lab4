const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;

app.use(express.static('client'));

app.use(express.json());

app.listen(PORT, () => {
    console.log('Server is running on ' + PORT + ' port')
});