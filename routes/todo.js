const express = require('express')
const Router = express.Router();
const TodoInstance = require('../controller/todo');

Router.get('/getall', TodoInstance.getAllTodos);
Router.get('/:todoId', TodoInstance.getTodoById);
Router.post('/create', TodoInstance.createTodo);
Router.put('/update/:todoId', TodoInstance.updateTodoById);
Router.delete('/delete/:todoId', TodoInstance.deleteTodoById);

module.exports = Router;