package main

import "fmt"

func main() {
	var countChicken int
	fmt.Scanln(&countChicken)

	var countFish int
	fmt.Scanln(&countFish)

	var countVegy int
	fmt.Scanln(&countVegy)

	var priceChicken = float32(countChicken) * 10.35
	var priceFish = float32(countFish) * 12.40
	var priceVegy = float32(countVegy) * 8.15

	var totalMenu = priceChicken + priceFish + priceVegy
	var desert = totalMenu * 0.2

	var delivery float32 = 2.50

	var total = totalMenu + desert + delivery

	fmt.Print(total)

}
