package repositories

import (
	"context"
	"go-server/config"
	"go-server/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	// "go.mongodb.org/mongo-driver/bson/primitive"
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
	ctx := context.Background()
	var todos []models.Todo

	cursor, err := r.collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var todo models.Todo
		cursor.Decode(&todo)
		todos = append(todos, todo)
	}

	return todos, nil
}

// func (r *TodoRepository) CreateTodo(todo models.Todo) (*models.Todo, error) {

// }

// func (r *TodoRepository) UpdateIsReady(todo models.Todo) (*models.Todo, error) {

// }

// func (r *TodoRepository) DeleteTodo(todoId primitive.ObjectID) error {

// }
