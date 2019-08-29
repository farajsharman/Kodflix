const express = require('express');
const app = express();
const getGallery = require('./shows');
const path = require('path')
const port = process.env.PORT || 3001;
app.get('/rest/shows', (req, res) => res.send(getGallery()));
app.listen(3001, () => console.log('Example app listening on port 3000!')); 
// Serve any static files
app.use(express.static(path.join(__dirname, '../../build')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
app.listen(port, () => console.log(`Listening on port ${port}`)); 
