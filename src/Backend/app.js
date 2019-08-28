const express = require('express');
const app = express();
const getGallery = require('./shows');
app.get('/rest/shows', (req, res) => res.send(getGallery()));
app.listen(3000, () => console.log('Example app listening on port 3000!')); 