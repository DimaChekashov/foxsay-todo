package main

import (
	"go-server/routes"
	"log"
	"net/http"
)

func main() {
	router := routes.SetupRoutes()

	log.Println("Server is running on http://localhost:8080")

	if err := http.ListenAndServe(":8080", router); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
