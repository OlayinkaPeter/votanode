const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getAllParties, addParty, deleteParty, editParty} = require('./routes/parties');
const {getAllCandidates, addCandidate, deleteCandidate, editCandidate} = require('./routes/candidates');
const {getAllOffices, addOffice, deleteOffice, editOffice} = require('./routes/offices');

const port = 3000;

// create connection to database
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'votanode'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

// routes for /


// routes for the parties
app.get('/parties', getAllParties);
app.get('/party/delete/:id', deleteParty);
app.post('/party/add', addParty);
app.post('/party/edit/:id', editParty);

// routes for the candidates
app.get('/candidates', getAllCandidates);
app.get('/candidate/delete/:id', deleteCandidate);
app.post('/candidate/add', addCandidate);
app.post('/candidate/edit/:id', editCandidate);

// routes for the offices
app.get('/offices', getAllOffices);
app.get('/office/delete/:id', deleteOffice);
app.post('/office/add', addOffice);
app.post('/office/edit/:id', editOffice);

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
