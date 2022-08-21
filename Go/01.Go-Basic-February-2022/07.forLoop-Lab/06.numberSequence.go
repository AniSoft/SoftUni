package main

import (
	"fmt"
	"math"
)

func main() {
	var n int
	fmt.Scanln(&n)

	var max int = math.MinInt32
	var min int = math.MaxInt32

	for i := 1; i <= n; i++ {
		var value int
		fmt.Scanln(&value)

		if value > max {
			max = value
		}

		if value < min {
			min = value
		}
	}

	fmt.Printf("Max number: %d\n", max)
	fmt.Printf("Min number: %d", min)
}
