package main

import "fmt"

func main() {
	var firstName string
	fmt.Scanln(&firstName)

	var lastName string
	fmt.Scanln(&lastName)

	var age int
	fmt.Scanln(&age)

	var town string
	fmt.Scanln(&town)

	fmt.Printf("You are %s %s, a %d-years old person from %s.", firstName, lastName, age, town)
}
