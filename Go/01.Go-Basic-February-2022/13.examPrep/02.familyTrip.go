package main

import "fmt"

func main() {
	var budget float32
	fmt.Scanln(&budget)

	var countNights int
	fmt.Scanln(&countNights)

	var pricePerNight float32
	fmt.Scanln(&pricePerNight)

	var percent int
	fmt.Scanln(&percent)

	if countNights > 7 {
		pricePerNight = 0.95 * pricePerNight
	}

	var sumNights float32 = float32(countNights) * pricePerNight

	var sumExtra float32 = budget * float32(percent) / 100.0

	var total float32 = sumNights + sumExtra

	var rest float32 = budget - total
	if budget >= total {
		fmt.Printf("Ivanovi will be left with %.2f leva after vacation.", rest)
	} else {
		var need float32 = total - budget
		fmt.Printf("%.2f leva needed.", need)
	}
}
