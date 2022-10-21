package main

import (
	"fmt"
	"twitless/main/tweets"

	"github.com/gin-gonic/gin"
)

// Core file for the TwitLess backend

func main() {
	fmt.Println("TwitLess backend starting up...")
	router := gin.Default()
	fmt.Println("Now setting up routes...")
	if key_loaded := tweets.Load_Config(); !key_loaded {
		fmt.Println("There was an error loading the api key, see log")
		return
	}

	// TODO: Write a health check
	router.GET("/tweets", tweets.GetTweets)
	router.GET("/tweets/:id", tweets.GetTweetById)

	fmt.Println("And now running router...")
	router.Run("localhost:8080")
	fmt.Println("Router running!")

}
