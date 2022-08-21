package main

import "fmt"

func main() {
	var number int
	fmt.Scanln(&number)

	var isValid bool = (number >= 100 && number <= 200) || (number == 0)
	if !isValid {
		fmt.Print("invalid")
	}
}
