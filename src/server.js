const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose')

const app = express();


mongoose.connect('mongodb+srv://Ahsverus:jaderocha234@omnistack-1v0tp.mongodb.net/agoraVai?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
app.use(express.json());
app.use(routes)

app.listen(3000)