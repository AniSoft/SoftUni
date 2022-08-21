package main

import "fmt"

func main() {
	var budget int
	fmt.Scanln(&budget)

	var season string
	fmt.Scanln(&season)

	var countFishers int
	fmt.Scanln(&countFishers)

	var rent float32 = 0

	switch season {
	case "Spring":
		rent = 3000
	case "Autumn", "Summer":
		rent = 4200
	case "Winter":
		rent = 2600
	}

	if countFishers <= 6 {
		rent = 0.9 * rent
	} else if countFishers >= 7 && countFishers <= 11 {
		rent = 0.85 * rent
	} else if countFishers > 12 {
		rent = 0.75 * rent
	}

	if countFishers%2 == 0 && season != "Autumn" {
		rent = 0.95 * rent
	}

	if float32(budget) >= rent {
		var leftMoney float32 = float32(budget) - rent
		fmt.Printf("Yes! You have %.2f leva left.", leftMoney)
	} else {
		var needMoney float32 = rent - float32(budget)
		fmt.Printf("Not enough money! You need %.2f leva.", needMoney)
	}
}
