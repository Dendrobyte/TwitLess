package tweets

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"time"
	"twitless/main/config"

	"github.com/gin-gonic/gin"
)

var BEARER_TOKEN string
var TOKEN string
var TOKEN_SECRET string

type tweet struct {
	ID    string `json:"id"`
	User  string `json:"user"`
	Body  string `json:"body"`
	Likes int    `json:"likes"`
}

var tweets_temp = []tweet{
	{ID: "1", User: "Mobkinz", Body: "Tweet one", Likes: 10},
	{ID: "2", User: "Dendrobyte", Body: "Tweet two!", Likes: 7},
	{ID: "3", User: "Mobkinz", Body: "Tweet three?!", Likes: 69},
	{ID: "4", User: "Dendrobyte", Body: "Fourth tweet", Likes: 9},
}

func Load_Config() bool {
	config, err := config.LoadConfig()
	if err != nil {
		log.Fatal("Cannot load config from tweets.go:", err)
		return false
	}

	BEARER_TOKEN = config.BEARER_TOKEN
	TOKEN = config.TOKEN
	TOKEN_SECRET = config.TOKEN_SECRET
	fmt.Println("Loaded API key from configuration!")
	return true
}

// Get tweets given a particular user -- TODO, obviously
func GetTweets(c *gin.Context) {
	id := c.Param("id")

	client := &http.Client{
		Timeout: time.Second * 10,
	}
	c.IndentedJSON(http.StatusOK, tweets_temp)
}

func GetTweetById(c *gin.Context) {
	id := c.Param("id")

	// Fetch the tweet
	// TODO: Move all of this content out into a general function so that you only handle
	// 		 the response here, i.e. don't have to keep making the client and whatnot
	//		 Additionally, I may be ignoring something within gin, though gin seems like a me thing
	client := &http.Client{
		Timeout: time.Second * 10,
	}
	req, err := http.NewRequest("GET", "https://api.twitter.com/2/tweets/"+id, nil)
	if err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Issue with making get request"})
	}
	req.Header.Set("Authorization", "Bearer "+BEARER_TOKEN)
	resp, err := client.Do(req)
	if err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "No tweet found with given ID"})
	}
	defer resp.Body.Close()
	// TODO: When you generalize all of this, make a function just to limit lines to get this stuff and convert it back to json
	respBin, _ := io.ReadAll(resp.Body)
	respText := string(respBin)

	// And this is what gets sent to the front end!
	c.JSON(resp.StatusCode, respText)
}
