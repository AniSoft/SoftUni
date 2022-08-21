package main

import "fmt"

func main() {
	var usd float32
	fmt.Scanln(&usd)

	var bgn float32 = usd * 1.79549
	fmt.Print(bgn)
}