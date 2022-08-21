package main

import "fmt"

func main() {
	var tax float32
	fmt.Scanln(&tax)

	var shoosePrice float32 = tax * 0.6

	var ekip float32 = shoosePrice * 0.8
	var ball float32 = ekip / 4.0
	var accessories float32 = ball / 5.0

	var total float32 = tax + shoosePrice + ekip + ball + accessories

	fmt.Printf("%.2f", total)
}
