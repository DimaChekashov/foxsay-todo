package controllers

import (
	"encoding/json"
	"go-server/models"
	"go-server/repositories"
	"net/http"

	"github.com/gorilla/mux"
)

type TodoConroller struct {
	repo *repositories.TodoRepository
}

func NewTodoRepository(repo *repositories.TodoRepository) *TodoRepository {
	return &TodoController{repo: repo}
}

func (c *TodoController) GetTodos(w http.ResponseWriter, r *http.Request) {

}

func (c *TodoController) CreateTodo(w http.ResponseWriter, r *http.Request) {

}

func (c *TodoController) UpdateIsReady(w http.ResponseWriter, r *http.Request) {

}

func (c *TodoController) DeleteTodo(w http.ResponseWriter, r *http.Request) {

}
