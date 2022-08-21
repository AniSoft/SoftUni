package main

import "fmt"

func main() {
	var guests int
	fmt.Scanln(&guests)

	var cuvert float32
	fmt.Scanln(&cuvert)

	var budget float32
	fmt.Scanln(&budget)

	var cake float32 = budget * 0.1

	if guests >= 10 && guests <= 15 {
		cuvert = cuvert * 0.85
	} else if guests > 15 && guests <= 20 {
		cuvert = cuvert * 0.8
	} else if guests > 20 {
		cuvert = cuvert * 0.75
	}

	var total float32 = float32(guests)*cuvert + cake

	var rest float32 = budget - total
	if total <= budget {
		fmt.Printf("It is party time! %.2f leva left.", rest)
	} else {
		var need float32 = total - budget
		fmt.Printf("No party! %.2f leva needed.", need)
	}
}
