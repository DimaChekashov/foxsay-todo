package controllers

import (
	"encoding/json"
	"go-server/models"
	"go-server/repositories"
	"net/http"

	// "github.com/gorilla/mux"
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

// func (c *TodoController) UpdateIsReady(w http.ResponseWriter, r *http.Request) {

// }

// func (c *TodoController) DeleteTodo(w http.ResponseWriter, r *http.Request) {

// }
