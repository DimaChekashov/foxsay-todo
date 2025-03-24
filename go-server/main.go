package main

import (
	"go-server/routes"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	router := routes.SetupRoutes()

	log.Println("Server is running on http://localhost:" + os.Getenv("PORT"))

	if err := http.ListenAndServe(":"+os.Getenv("PORT"), router); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
