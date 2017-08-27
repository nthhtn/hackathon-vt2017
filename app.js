const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.render('post');
});

app.get('/map', (req, res) => {
	res.render('index');
});

app.post('/post', (req, res) => {
	console.log(req.body);
	res.json(req.body);
});

app.listen(3000, () => {
	console.log('Listening on 3000...');
});