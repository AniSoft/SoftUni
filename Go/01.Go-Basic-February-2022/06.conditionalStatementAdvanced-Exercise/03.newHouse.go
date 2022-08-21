package main

import "fmt"

func main() {
	var typeFlower string
	fmt.Scanln(&typeFlower)

	var count int
	fmt.Scanln(&count)

	var budget int
	fmt.Scanln(&budget)

	var price float32

	switch typeFlower {
	case "Roses":
		price = 5
	case "Dahlias":
		price = 3.8
	case "Tulips":
		price = 2.8
	case "Narcissus":
		price = 3
	case "Gladiolus":
		price = 2.5
	}

	var discount float32 = 0

	if typeFlower == "Roses" && count > 80 {
		discount = 0.10
	} else if typeFlower == "Dahlias" && count > 90 {
		discount = 0.15
	} else if typeFlower == "Tulips" && count > 80 {
		discount = 0.15
	} else if typeFlower == "Narcissus" && count < 120 {
		price = price * 1.15
	} else if typeFlower == "Gladiolus" && count < 80 {
		price = price * 1.2
	}

	var total float32 = float32(count) * (1 - discount) * price

	if float32(budget) >= total {
		var rest float32 = float32(budget) - total
		fmt.Printf("Hey, you have a great garden with %d %s and %.2f leva left.", count, typeFlower, rest)
	} else {
		fmt.Printf("Not enough money, you need %.2f leva more.", total-float32(budget))
	}
}
