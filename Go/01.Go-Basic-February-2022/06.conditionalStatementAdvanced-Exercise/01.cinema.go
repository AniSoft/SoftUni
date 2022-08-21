package main

import "fmt"

func main() {
	var typeProjection string
	fmt.Scanln(&typeProjection)

	var rows, cols int
	fmt.Scanln(&rows)
	fmt.Scanln(&cols)

	var countTickets int = rows * cols
	var pricePerTicket float32 = 0

	switch typeProjection {
		case "Premiere":
			pricePerTicket = 12
		case "Normal":
			pricePerTicket = 7.5
		case "Discount":
			pricePerTicket = 5.00
	}

	var profit float32 = float32(countTickets) * pricePerTicket
	fmt.Printf("%.2f leva", profit)
}
