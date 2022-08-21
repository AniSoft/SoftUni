package main

import "fmt"

func main() {
	var dogFood float32 = 2.5
	var catFood float32 = 4

	var dogNumber int
	fmt.Scanln(&dogNumber)

	var catNumber int
	fmt.Scanln(&catNumber)

	var total float32 = dogFood*float32(dogNumber) + catFood*float32(catNumber)

	fmt.Printf("%.1f lv.", total)
}
