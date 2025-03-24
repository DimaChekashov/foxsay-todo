package repositories

import (
	"context"
	"go-server/config"
	"go-server/models"
	"time"
	"fmt"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
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

func (r *TodoRepository) CreateTodo(todo models.Todo) (*models.Todo, error) {
	ctx := context.Background()

	result, err := r.collection.InsertOne(ctx, todo)
	if err != nil {
		return nil, err
	}

	todo.ID = result.InsertedID.(primitive.ObjectID)
	return &todo, nil
}

func (r *TodoRepository) UpdateIsReady(todo models.Todo) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	filter := bson.M{"_id": todo.ID}
	update := bson.M{"$set": bson.M{"isReady": todo.IsReady}}

	result, err := r.collection.UpdateOne(ctx, filter, update)
	if err != nil {
		return fmt.Errorf("update failed: %w", err)
	}

	if result.MatchedCount == 0 {
		return fmt.Errorf("document not found")
	}

	return nil
}

func (r *TodoRepository) DeleteTodo(id primitive.ObjectID) (*models.Todo, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	todo := &models.Todo{}
	err := r.collection.FindOne(ctx, bson.M{"_id": id}).Decode(todo)
	if err != nil {
		return nil, err
	}

	_, err = r.collection.DeleteOne(ctx, bson.M{"_id": id})
	if err != nil {
		return nil, err
	}

	return todo, nil
}
