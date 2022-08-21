package main

import "fmt"

func main() {
	var budget float32
	fmt.Scanln(&budget)

	var people int
	fmt.Scanln(&people)

	var clothing float32
	fmt.Scanln(&clothing)

	var decor float32 = budget * 0.1

	if people > 150 {
		clothing = clothing * 0.9
	}

	var total float32 = decor + float32(people)*clothing

	if total > budget {
		var needMoney float32 = total - budget
		fmt.Println("Not enough money!")
		fmt.Printf("Wingard needs %.2f leva more.", needMoney)
	} else {
		var restMoney float32 = budget - total
		fmt.Println("Action!")
		fmt.Printf("Wingard starts filming with %.2f leva left.", restMoney)
	}
}
