const todoModel = require('./todos.model');

/** 
 * GET ALL -> getAllTodos() -> LINES 11/16
 * GET ONE -> getOneById() -> LINES 18/23
 * CREATE -> create() -> LINES 25/31
 * REMOVE -> remove() -> LINES 33/40
 * PATCH -> patch() -> LINES 42/49
*/

module.exports = { getAllTodos, getOneById, create, remove, patch };

function getAllTodos(req, res){
    todoModel.find()
        .then(todos => res.json(todos))
};

function getOneById(req, res){
    const todoId = req.params.id;
    todoModel
        .findById({"_id":todoId})
        .then(todo => res.json(todo))
        .catch(err => res.status(404).json(err))
}

function create(req, res){
    const newTodo = req.body
    todoModel.create(newTodo)
        .then(newTodoResponse => res.json(newTodoResponse))
        .catch(err => res.status(400).json(err))
}

function remove(req, res){
    const todoId = req.params.id;
    todoModel
        .findById({"_id":todoId})
        .remove()
        .then(deletedTodo => res.json("To do deleted succesfuly"))
        .catch(err => res.status(404).json(err))
}

function patch(req, res){
    const todoId = req.params.id;
    todoModel
        .findById({"_id":todoId})
        .update(req.body)
        .then(patchdTodo => res.json(patchdTodo))
        .catch(err => res.status(500).json(err))
}
