package routes

import (
	"go-server/controllers"
	"go-server/middleware"
	"go-server/repositories"

	"github.com/gorilla/mux"
)

func SetupRoutes() *mux.Router {
	router := mux.NewRouter()
	repo := repositories.NewTodoRepository()
	controllers := controllers.NewTodoController(repo)

	router.Use(cors.CorsMiddleware)

	apiRouter := router.PathPrefix("/api").Subrouter()

	apiRouter.HandleFunc("/todos", controllers.GetTodos).Methods("GET", "OPTIONS")
	apiRouter.HandleFunc("/todos", controllers.CreateTodo).Methods("POST", "OPTIONS")
	apiRouter.HandleFunc("/todos", controllers.UpdateIsReady).Methods("PUT", "OPTIONS")
	apiRouter.HandleFunc("/todos", controllers.DeleteTodo).Methods("DELETE", "OPTIONS")

	return router
}
