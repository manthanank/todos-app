const Todo = require("../models/todo");

// Get all todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// Create a new todo
exports.createTodo = async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  await newTodo.save();
  res.json(newTodo);
};

// Update a todo
exports.updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed },
    { new: true }
  );
  res.json(todo);
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
};
