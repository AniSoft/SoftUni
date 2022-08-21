package main

import (
	"fmt"
	"strconv"
)

func main() {
	var input string
	fmt.Scanln(&input)

	var sumPrime, sumNonPrime int = 0, 0

	for input != "stop" {
		number, _ := strconv.Atoi(input) //  Convert string to int

		if number < 0 {
			fmt.Println("Number is negative.")
		} else {
			var count int = 0
			for i := 1; i <= number; i++ {
				if number%i == 0 {
					count++
				}
			}

			if count == 2 {
				sumPrime += number
			} else {
				sumNonPrime += number
			}
		}

		fmt.Scanln(&input)
	}

	fmt.Printf("Sum of all prime numbers is: %d\n", sumPrime)
	fmt.Printf("Sum of all non prime numbers is: %d", sumNonPrime)
}
