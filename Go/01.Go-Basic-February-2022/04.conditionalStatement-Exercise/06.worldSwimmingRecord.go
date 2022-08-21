package main

import (
	"fmt"
	"math"
)

func main() {
	var record float64
	fmt.Scanln(&record)

	var distance float64
	fmt.Scanln(&distance)

	var time1meter float64
	fmt.Scanln(&time1meter)

	var time float64 = distance * time1meter

	var slow float64 = math.Floor(distance/15) * 12.5
	var total float64 = time + slow

	if total < record {
		fmt.Printf("Yes, he succeeded! The new world record is %.2f seconds.", total)
	} else {
		var needTime float64 = total - record
		fmt.Printf("No, he failed! He was %.2f seconds slower.", needTime)
	}
}
