package main

import "fmt"

func main() {
	var budget float32
	fmt.Scanln(&budget)

	var gas float32
	fmt.Scanln(&gas)

	var day string
	fmt.Scanln(&day)

	var total float32 = gas*2.10 + 100

	if day == "Saturday" {
		total = total * 0.9
	} else if day == "Sunday" {
		total = total * 0.8
	}

	var rest float32 = budget - total
	if total <= budget {
		fmt.Scanln("Safari time! Money left: %.2f lv.", rest)
	} else {
		var need = total - budget
		fmt.Scanln("Not enough money! Money needed: %.2f lv.", need)
	}
}
