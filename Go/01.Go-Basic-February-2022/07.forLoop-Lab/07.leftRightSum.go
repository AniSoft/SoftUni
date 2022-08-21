package main

import (
	"fmt"
	"math"
)

func main() {
	var n int
	fmt.Scanln(&n)

	var sumLeft int = 0
	var sumRigth int = 0

	for i := 1; i <= n; i++ {
		var value int
		fmt.Scanln(&value)
		sumLeft += value
	}

	for i := 1; i <= n; i++ {
		var value int
		fmt.Scanln(&value)
		sumRigth += value
	}

	if sumLeft == sumRigth {
		fmt.Printf("Yes, sum = %d", sumLeft)
	} else {
		var diff int = sumLeft - sumRigth
		fmt.Printf("No, diff = %.0f", math.Abs(float64(diff)))
	}
}
