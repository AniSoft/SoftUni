package main

import "fmt"

func main() {
	var priceOver20 float32
	fmt.Scanln(&priceOver20)

	var weight float32
	fmt.Scanln(&weight)

	var days int
	fmt.Scanln(&days)

	var count int
	fmt.Scanln(&count)

	var tax float32

	if weight < 10 {
		tax = 0.2 * priceOver20
	} else if weight >= 10 && weight <= 20 {
		tax = 0.5 * priceOver20
	} else if weight > 20 {
		tax = priceOver20
	}

	if days > 30 {
		tax = tax * 1.1
	} else if days >= 7 && days <= 30 {
		tax = tax * 1.15
	} else if days < 7 {
		tax = tax * 1.4
	}

	var total float32 = float32(count) * tax

	fmt.Printf("The total price of bags is: %.2f lv.", total)

}
