package main

import (
	"fmt"
	"math"
)

func main() {
	var n int
	fmt.Scanln(&n)

	var sumEven int = 0
	var sumOdd int = 0

	for i := 1; i <= n; i++ {
		var value int
		fmt.Scanln(&value)

		if i%2 == 0 {
			sumEven += value
		} else {
			sumOdd += value
		}
	}

	if sumEven == sumOdd {
		fmt.Println("Yes")
		fmt.Printf("Sum = %d", sumEven)
	} else {
		fmt.Println("No")
		var diff int = sumEven - sumOdd
		fmt.Printf("Diff = %.0f", math.Abs(float64(diff)))
	}
}
