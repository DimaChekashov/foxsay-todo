import express from 'express';
import { createTodo, getTodos, updateIsReady, deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

router.get("/todos", getTodos);

router.post("/todos", createTodo);

router.patch("/todos", updateIsReady);

router.delete("/todos", deleteTodo);

export default router;
