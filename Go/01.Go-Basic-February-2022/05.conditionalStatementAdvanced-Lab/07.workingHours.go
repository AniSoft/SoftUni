package main

import "fmt"

func main() {
	var hour int
	fmt.Scanln(&hour)

	var day string
	fmt.Scanln(&day)

	if hour < 10 || hour > 18 || day == "Sunday" {
		fmt.Print("closed")
	} else {
		fmt.Print("open")
	}
}
