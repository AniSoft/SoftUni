package main

import "fmt"

func main() {
	var firstNumber int
	fmt.Scanln(&firstNumber)

	var sum int = 0

	for sum < firstNumber {
		var number int
		fmt.Scanln(&number)

		sum += number		
	}

	fmt.Print(sum)
}
