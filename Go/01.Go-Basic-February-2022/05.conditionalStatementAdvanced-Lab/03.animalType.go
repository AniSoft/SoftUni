package main

import "fmt"

func main() {
	var animal string
	fmt.Scanln(&animal)

	switch animal {
	case "dog":
		fmt.Print("mammal")
	case "crocodile", "tortoise", "snake":
		fmt.Print("reptile")
	default:
		fmt.Print("unknown")
	}
}
