package repositories

import (
	"context"
	"go-server/config"
	"go-server/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type TodoRepository struct {
	collection *mongo.Collection
}

func NewTodoRepository() *TodoRepository {
	return &TodoRepository{
		collection: config.GetDBCollection(),
	}
}

func (r *TodoRepository) GetTodos() ([]models.Todo, error) {

}

func (r *TodoRepository) CreateTodo(todo models.Todo) (*models.Todo, error) {

}

func (r *TodoRepository) updateIsReady(todo models.Todo) (*models.Todo, error) {

}

func (r *TodoRepository) deleteTodo(todoId primitive.ObjectID) error {

}
