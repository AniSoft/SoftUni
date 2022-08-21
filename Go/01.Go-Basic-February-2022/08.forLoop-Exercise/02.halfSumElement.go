package main

import (
	"fmt"
	"math"
)

func main() {
	var n int
	fmt.Scanln(&n)

	var max int = math.MinInt32
	var sum int = 0

	for i := 1; i <= n; i++ {
		var value int
		fmt.Scanln(&value)

		if value > max {
			max = value
		}

		sum = sum + value
	}

	var sumOthers int = sum - max

	if max == sumOthers {
		fmt.Println("Yes")
		fmt.Printf("Sum = %d", max)
	} else {
		fmt.Println("No")
		var diff = math.Abs(float64(max - sumOthers))
		fmt.Printf("Diff = %.0f", diff)
	}
}
