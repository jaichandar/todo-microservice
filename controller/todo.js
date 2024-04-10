const Todo = require('../models/Todo');

class TodoController {
    async getAllTodos(req, res) {
        try {
            const todos = await Todo.find();
            res.status(200).json({
                success: true,
                todos,
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error,
            })
        }
    }

    async createTodo(req, res) {
        try {
            const { todo } = req.body;
            const savedTodo = await Todo({ todo })
            await savedTodo.save().then((val) => {
                res.status(201).json({
                    success: true,
                    data: val,
                })
            })
        } catch (error) {
            res.status(400).json({ success: false, error })
        }
    }

    async getTodoById(req, res) {
        try {
            const { todoId } = req.params;
            const todo = await Todo.findById(todoId);
            res.status(200).json({
                success: true,
                todo
            });
        } catch (error) {
            res.status(400).json({ success: false, error });
        }
    }

    async updateTodoById(req, res) {
        try {
            const { todo } = req.body;
            const { todoId } = req.params;
            const isTodoExist = await Todo.findById(todoId)
            if (!isTodoExist) {
                return res.status(404).json({ success: false, message: 'Not Found' })
            }
            const updatedTodo = await Todo.findByIdAndUpdate(todoId, { todo });
            res.status(200).json({
                success: true,
                data: updatedTodo,
            })
        } catch (error) {
            res.status(400).json({ success: false, error });        
        }
    }

    async deleteTodoById(req, res) {
        try {
            const { todoId } = req.params;
            const isTodoExist = await Todo.findById(todoId)
            if (!isTodoExist) {
                return res.status(404).json({ success: false, message: 'Not Found' });
            }
            await Todo.findByIdAndDelete(todoId).then(() => {
                res.status(200).json({ success: true, message: 'Todo Deleted Successfully' })
            });
        } catch (error) {
            res.status(400).json({ success: false, error });
        }
    }
}

const instance = new TodoController();
module.exports = instance;