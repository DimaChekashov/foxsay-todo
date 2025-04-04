package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Todo struct {
	ID      primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Title   string             `json:"title" bson:"title""`
	IsReady bool               `json:"isReady" bson:"isReady"`
}
