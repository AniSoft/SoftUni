package main

import "fmt"

func main() {
	var bitcoin int
	fmt.Scanln(&bitcoin)

	var yuan float32
	fmt.Scanln(&yuan)

	var tax float32
	fmt.Scanln(&tax)

	var total float32 = ((float32(bitcoin)*1168 + yuan*0.15*1.76) / 1.95)
	total = total - (total * tax / 100)

	fmt.Printf("%.2f", total)
}
