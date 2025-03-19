import express from 'express';
import { createTodo, getTodos } from '../controllers/todoController.js';

const router = express.Router();

router.get("/todos", getTodos);

router.post("/todos", createTodo);

export default router;
