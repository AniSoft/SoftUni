package main

import "fmt"

func main() {
	var cakeCount int
	fmt.Scanln(&cakeCount)

	var eggs int
	fmt.Scanln(&eggs)

	var cookiesKg int
	fmt.Scanln(&cookiesKg)

	var total float32 = float32(cakeCount)*3.20 + float32(eggs)*4.35 + float32(cookiesKg)*5.40 + 0.15*(float32(eggs)*12)

	fmt.Printf("%.2f", total)
}
