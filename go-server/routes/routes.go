package routes

import (
	"go-server/controllers"
	"go-server/repositories"

	"github.com/gorilla/mux"
)

func SetupRoutes() *mux.Router {
	router := mux.NewRouter()
	repo := repositories.NewTodoRepository()
	controllers := controllers.NewTodoController(repo)

	apiRouter := router.PathPrefix("/api").Subrouter()

	apiRouter.HandleFunc("/todos", controllers.GetTodos).Methods("GET")
	apiRouter.HandleFunc("/todos", controllers.CreateTodo).Methods("POST")
	apiRouter.HandleFunc("/todos", controllers.UpdateIsReady).Methods("PUT")
	apiRouter.HandleFunc("/todos", controllers.DeleteTodo).Methods("DELETE")

	return router
}
