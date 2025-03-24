package models

type Todo struct {
	ID      string `bson:"_id",omitempty`
	Title   string `bson:"title"`
	IsReady bool   `bson:"isReady"`
}
