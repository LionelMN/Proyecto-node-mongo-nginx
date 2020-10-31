const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true, useUnifiedTopology:  true });

app.use(express.json());

const todosRouter = require('./api/todos/todos.router')
app.use('/todos', todosRouter)

const PORT = 80;
const HOST = "0.0.0.0"


app.listen(PORT, HOST)