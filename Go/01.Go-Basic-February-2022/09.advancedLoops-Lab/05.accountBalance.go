package main

import (
	"fmt"
	"strconv"
)

func main() {
	var bankAccount float32 = 0

	var input string
	fmt.Scanln(&input)

	for input != "NoMoreMoney" {
		sum, _ := strconv.ParseFloat(input, 32)

		if sum >= 0 {
			bankAccount += float32(sum)
			fmt.Printf("Increase: %.2f\n", sum)
		} else {
			fmt.Println("Invalid operation!")
			break
		}

		fmt.Scanln(&input)
	}

	fmt.Printf("Total: %.2f", bankAccount)
}
