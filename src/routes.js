const express = require('express');
const UserController = require('./controllers/UserController')


const routes = express.Router();
routes.get('/', (req, res) => {
  res.json({ message: 'funfando' })
})
routes.post('/user', UserController.store);


module.exports = routes