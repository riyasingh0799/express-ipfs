const ipfsClient = require('ipfs-http-client');
const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const fs= require('fs')

const ipfs = new ipfsClient({ host: 'localhost', port: '5001', protocol: 'http'});

const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
 	res.render('storeData');
});

app.listen(3000, () => {
	console.log('Server is listening on port 3000');
});