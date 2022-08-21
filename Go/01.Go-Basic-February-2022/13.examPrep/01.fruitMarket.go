package main

import "fmt"

func main() {
	var priceStrawberries float32
	fmt.Scanln(&priceStrawberries)

	var bananaQuantity float32
	fmt.Scanln(&bananaQuantity)

	var orangeQuantity float32
	fmt.Scanln(&orangeQuantity)

	var raspberriesQuantity float32
	fmt.Scanln(&raspberriesQuantity)

	var strawberriesQuantity float32
	fmt.Scanln(&strawberriesQuantity)

	var priceRaspberries float32 = priceStrawberries / 2.0
	var priceBanana float32 = priceRaspberries - 0.8*priceRaspberries
	var priceOringe float32 = priceRaspberries - 0.4*priceRaspberries

	var sumStrawberries float32 = strawberriesQuantity * priceStrawberries
	var sumRaspberries = raspberriesQuantity * priceRaspberries
	var sumOranges float32 = priceOringe * orangeQuantity
	var sumBananas float32 = bananaQuantity * priceBanana

	var total float32 = sumStrawberries + sumBananas + sumOranges + sumRaspberries

	fmt.Printf("%.2f", total)

}
