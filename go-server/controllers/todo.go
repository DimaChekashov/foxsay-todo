package controllers

import (
	"encoding/json"
	"go-server/models"
	"go-server/repositories"
	"net/http"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type TodoController struct {
	repo *repositories.TodoRepository
}

func NewTodoRepository(repo *repositories.TodoRepository) *TodoController {
	return &TodoController{repo: repo}
}

func (c *TodoController) GetTodos(w http.ResponseWriter, r *http.Request) {
	todos, err := c.repo.GetTodos()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(todos)
}

func (c *TodoController) CreateTodo(w http.ResponseWriter, r *http.Request) {
	var todo models.Todo
	if err := json.NewDecoder(r.Body).Decode(&todo); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	created, err := c.repo.CreateTodo(todo)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(created)
}

func (c *TodoController) UpdateIsReady(w http.ResponseWriter, r *http.Request) {
	var todo models.Todo
	if err := json.NewDecoder(r.Body).Decode(&todo); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if todo.ID == primitive.NilObjectID {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}

	if err := c.repo.UpdateIsReady(todo); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(todo)
}

// func (c *TodoController) DeleteTodo(w http.ResponseWriter, r *http.Request) {

// }
