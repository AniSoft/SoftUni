package main

import "fmt"

func main() {
	var product string
	fmt.Scanln(&product)

	if product == "banana" || product == "apple" || product == "kiwi" || product == "cherry" || product == "lemon" || product == "grapes" {
		fmt.Print("fruit")
	} else if product == "tomato" || product == "cucumber" || product == "pepper" || product == "carrot" {
		fmt.Print("vegetable")
	} else {
		fmt.Print("unknown")
	}
}
