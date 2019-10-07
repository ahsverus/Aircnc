const express = require('express');
const UserController = require('./controllers/UserController')
const SpotController = require('./controllers/SpotController')
const multer = require('multer');
const ConfigUpload = require('./config/upload');

const upload = multer(ConfigUpload)
const routes = express.Router();
routes.get('/', (req, res) => {
  res.json({ message: 'funfando' })
})
routes.post('/user', UserController.store);
routes.post('/spot', upload.single('thumbnail'), SpotController.store);
routes.get('/spot', SpotController.index)

module.exports = routes