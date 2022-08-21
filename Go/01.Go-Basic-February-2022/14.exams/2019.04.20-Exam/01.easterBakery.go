package main

import "fmt"

func main() {
	var flourPrice float32
	fmt.Scanln(&flourPrice)

	var flourKg float32
	fmt.Scanln(&flourKg)

	var sugarKg float32
	fmt.Scanln(&sugarKg)

	var eggsCount int
	fmt.Scanln(&eggsCount)

	var leaven int
	fmt.Scanln(&leaven)

	var sugarPrice float32 = flourPrice * 0.75
	var eggsPrice float32 = flourPrice * 1.1
	var leavenPrice float32 = sugarPrice * 0.2

	var total float32 = flourPrice*flourKg + sugarPrice*sugarKg + eggsPrice*float32(eggsCount) + leavenPrice*float32(leaven)

	fmt.Printf("%.2f", total)
}
