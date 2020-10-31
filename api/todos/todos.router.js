const router = require('express').Router();
const { getAllTodos, getOneById, create, remove, patch } = require('./todos.controller')

router.get('/', getAllTodos);
router.get('/:id', getOneById);
router.post('/', create);
router.delete('/:id', remove);
router.patch('/:id', patch);

module.exports = router;