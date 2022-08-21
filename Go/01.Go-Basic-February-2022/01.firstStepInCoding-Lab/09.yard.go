package main

import "fmt"

func main() {
	var area float32
	fmt.Scanln(&area)

	var price float32 = 7.61

	var discount float32 = 0.18 * area * price

	var total float32 = area*price - discount

	fmt.Printf("The final price is: %.2f lv.", total)
	fmt.Printf("The discount is: %.2f lv.", discount)
}
