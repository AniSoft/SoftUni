package main

import "fmt"

func main() {
	var age int
	fmt.Scanln(&age)

	var priceWash float32
	fmt.Scanln(&priceWash)

	var priceToy float32
	fmt.Scanln(&priceToy)

	var totalToys float32 = 0
	var birthdayMoney float32 = 0

	var totalMoney float32 = 0

	for i := 1; i <= age; i++ {
		if i%2 == 0 {
			birthdayMoney += 10
			totalMoney += birthdayMoney
			totalMoney--

		} else if i%2 == 1 {
			totalToys += 1
			totalMoney += 1 * priceToy
		}
	}

	var restMoney float32 = totalMoney - priceWash
	if totalMoney >= priceWash {
		fmt.Printf("Yes! %.2f", restMoney)
	} else {
		var needMoney float32 = priceWash - totalMoney
		fmt.Printf("No! %.2f", needMoney)
	}
}
