package routes

import (
	"net/http"
	"github.com/gorilla/mux"
)

func SetupRoutes() *http.router {
	router := mux.NewRouter()
	
	router.HandleFunc("/todos").Methods("GET")
	router.HandleFunc("/todos").Methods("POST")
	router.HandleFunc("/todos").Methods("PUT")
	router.HandleFunc("/todos").Methods("DELETE")

	return router
}