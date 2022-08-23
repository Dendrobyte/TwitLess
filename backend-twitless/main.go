package main

// Yea that's right, we're doing this in Go now.
// Laravel felt like it had a bit too much going on and Go is much more practical for me to learn.

import (
	"fmt"
	"os"
	"net/http"
)

type Activity struct {
	description string
	accessibility float64
	category string
	participants int
	price float64
}

// Just start with a random API to mess with for now
var API_URL = "http://www.boredapi.com/api/activity/"

// Redirect all routes based on path here
func baseHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Base handler route pinged")
	firstSlash := Index(r.URL.Path[1:])
	route := r.URL.Path[1:]
	if (firstSlash != -1) {
		route = r.URL.Path[1:firstSlash]
	}
	if (name == "Exit") {
		os.Exit(2)
	} else {
		fmt.Fprintf(w, "Heya %s!", name)
	}
}

func main() {
	fmt.Println("TwitLess backend now running...")

	// Send all routes to main handler function
	http.HandleFunc("/", baseHandler)
	http.ListenAndServe("127.0.0.1:8080", nil)
	fmt.Println("Running!")
}