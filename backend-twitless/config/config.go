package config

import "github.com/spf13/viper"

type Config struct {
	BEARER_TOKEN string `mapstructure:"BEARER_TOKEN"`
	TOKEN        string `mapstructure:"TOKEN"`
	TOKEN_SECRET string `mapstructure:"TOKEN_SECRET"`
}

func LoadConfig() (config Config, err error) {
	viper.AddConfigPath("./config")
	viper.SetConfigName("config")
	viper.SetConfigType("yml")

	if err = viper.ReadInConfig(); err != nil {
		return
	}

	err = viper.Unmarshal(&config)
	return
}
