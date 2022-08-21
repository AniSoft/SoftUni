package main

import "fmt"

func main() {
	var depositSum float32
	fmt.Scanln(&depositSum)

	var months int
	fmt.Scanln(&months)

	var percent float32
	fmt.Scanln(&percent)

	var sum float32 = depositSum + float32(months) *((depositSum * (percent / 100.0) )/ 12.0)
	fmt.Print(sum)
}