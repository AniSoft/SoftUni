package main

import "fmt"

func main() {
	var strawberryPrice float32
	fmt.Scanln(&strawberryPrice)

	var bananaKg float32
	fmt.Scanln(&bananaKg)

	var orangeKg float32
	fmt.Scanln(&orangeKg)

	var raspberryKg float32
	fmt.Scanln(&raspberryKg)

	var strawberryKg float32
	fmt.Scanln(&strawberryKg)

	var raspberryPrice float32 = strawberryPrice / 2.0
	var orangePrice float32 = raspberryPrice * 0.6
	var bananaPrice float32 = raspberryPrice * 0.2

	var total float32 = strawberryKg*strawberryPrice + raspberryKg*raspberryPrice + bananaKg*bananaPrice + orangeKg*orangePrice

	fmt.Printf("%.2f", total)
}
