package main

import "fmt"

func main() {
	var rent float32
	fmt.Scanln(&rent)

	var cake float32 = rent * 0.2
	var drinks float32 = cake - cake*0.45
	var animator float32 = rent / 3.0

	var total float32 = rent + cake + drinks + animator

	fmt.Printf("%.1f", total)
}
