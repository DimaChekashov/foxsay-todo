import express from 'express';
import { createTodo } from '../controllers/todoController.js';

const router = express.Router();

router.post("/todos", createTodo);

export default router;
