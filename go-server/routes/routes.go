package routes

import (
	"go-server/controllers"
	"go-server/repositories"
	// "net/http"

	"github.com/gorilla/mux"
)

func SetupRoutes() *mux.Router {
	router := mux.NewRouter()
	repo := repositories.NewTodoRepository()
	controllers := controllers.NewTodoRepository(repo)

	router.HandleFunc("/todos", controllers.GetTodos).Methods("GET")
	router.HandleFunc("/todos", controllers.CreateTodo).Methods("POST")
	router.HandleFunc("/todos", controllers.UpdateIsReady).Methods("PUT")
	router.HandleFunc("/todos", controllers.DeleteTodo).Methods("DELETE")

	return router
}
