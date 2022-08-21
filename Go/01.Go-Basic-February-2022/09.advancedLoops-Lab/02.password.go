package main

import "fmt"

func main() {
	var username string
	fmt.Scanln(&username)

	var password string
	fmt.Scanln(&password)

	var enteredPassword string
	fmt.Scanln(&enteredPassword)

	for enteredPassword != password {
		fmt.Scanln(&enteredPassword)
	}

	fmt.Printf("Welcome %s!", username)
}
