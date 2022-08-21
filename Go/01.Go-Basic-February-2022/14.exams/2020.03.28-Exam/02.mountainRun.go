package main

import (
	"fmt"
	"math"
)

func main() {
	var recordSec float32
	fmt.Scanln(&recordSec)

	var recordM float32
	fmt.Scanln(&recordM)

	var timeSecPer1M float32
	fmt.Scanln(&timeSecPer1M)

	var add float64 = math.Floor(float64(recordM/50)) * 30
	var total float64 = float64(recordM*timeSecPer1M) + add

	if total <= float64(recordSec) {
		fmt.Printf("Yes! The new record is %.2f seconds.", total)
	} else {
		var need float64 = total - float64(recordSec)
		fmt.Printf("No! He was %.2f seconds slower.", need)
	}
}
