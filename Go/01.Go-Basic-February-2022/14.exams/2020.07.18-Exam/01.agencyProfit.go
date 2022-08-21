package main

import "fmt"

func main() {
	var name string
	fmt.Scanln(&name)

	var countAdult int
	fmt.Scanln(&countAdult)

	var countChildren int
	fmt.Scanln(&countChildren)

	var priceAdult float32
	fmt.Scanln(&priceAdult)

	var tax float32
	fmt.Scanln(&tax)

	var priceChildren float32 = priceAdult * 0.3

	var total float32 = (priceAdult+tax)*float32(countAdult) + (priceChildren+tax)*float32(countChildren)

	var win float32 = total * 0.2

	fmt.Printf("The profit of your agency from %s tickets is %.2f lv.", name, win)

}
