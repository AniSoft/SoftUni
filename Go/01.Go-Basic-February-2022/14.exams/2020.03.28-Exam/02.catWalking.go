package main

import "fmt"

func main() {
	var min int
	fmt.Scanln(&min)

	var count int
	fmt.Scanln(&count)

	var calories int
	fmt.Scanln(&calories)

	var total float32 = float32(count) * float32(min) * 5.0

	if total >= 0.5*float32(calories) {
		fmt.Printf("Yes, the walk for your cat is enough. Burned calories per day: %.0f.", total)
	} else {
		fmt.Printf("No, the walk for your cat is not enough. Burned calories per day: %.0f.", total)
	}
}
