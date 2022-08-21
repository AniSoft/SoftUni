package main

import "fmt"

func main() {
	var budget float32
	fmt.Scanln(&budget)

	var nights int
	fmt.Scanln(&nights)

	var price float32
	fmt.Scanln(&price)

	var extra int
	fmt.Scanln(&extra)

	if nights > 7 {
		price = price * 0.95
	}

	var total float32 = float32(nights)*price + budget*float32(extra)/100

	var rest float32 = budget - total
	if rest >= 0 {
		fmt.Printf("Ivanovi will be left with %.2f leva after vacation.", rest)
	} else {
		var need float32 = total - budget
		fmt.Printf("%.2f leva needed.", need)
	}
}
