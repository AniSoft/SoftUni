package main

import "fmt"

func main() {
	var input string
	fmt.Scanln(&input)

	for input != "Stop" {
		fmt.Println(input)
		fmt.Scanln(&input)
	}
}
