const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the 'index.html' file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve the 'Signin.html' file
app.get('/Signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Signin.html'));
});

// Route to handle signup
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
