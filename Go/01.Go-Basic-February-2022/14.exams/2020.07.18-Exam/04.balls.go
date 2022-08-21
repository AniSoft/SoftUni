package main

import (
	"fmt"
	"math"
)

func main() {
	var count int
	fmt.Scanln(&count)

	var total float64 = 0
	var redCount int = 0
	var orangeCount int = 0
	var yellowCount int = 0
	var whiteCount int = 0
	var blackCount int = 0
	var otherCount int = 0

	for i := 1; i <= count; i++ {
		var color string
		fmt.Scanln(&color)

		switch color {
		case "red":
			total += 5
			redCount++

		case "orange":
			total += 10
			orangeCount++

		case "yellow":
			total += 15
			yellowCount++

		case "white":
			total += 20
			whiteCount++

		case "black":
			total = math.Floor(total / 2.0)
			blackCount++
		default:
			otherCount++
		}

	}

	fmt.Printf("Total points: %.0f\n", total)
	fmt.Printf("Red balls: %d\n", redCount)
	fmt.Printf("Orange balls: %d\n", orangeCount)
	fmt.Printf("Yellow balls: %d\n", yellowCount)
	fmt.Printf("White balls: %d\n", whiteCount)
	fmt.Printf("Other colors picked: %d\n", otherCount)
	fmt.Printf("Divides from black balls: %d\n", blackCount)
}
