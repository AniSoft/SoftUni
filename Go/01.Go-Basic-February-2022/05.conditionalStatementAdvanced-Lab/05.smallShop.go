package main

import "fmt"

func main() {
	var product string
	fmt.Scanln(&product)

	var town string
	fmt.Scanln(&town)

	var count float32
	fmt.Scanln(&count)

	var price float32

	if town == "Sofia" {
		switch product {
		case "coffee":
			price = 0.5 * count
		case "water":
			price = 0.8 * count
		case "beer":
			price = 1.20 * count
		case "sweets":
			price = 1.45 * count
		case "peanuts":
			price = 1.60 * count

		}
	} else if town == "Plovdiv" {
		switch product {
		case "coffee":
			price = 0.4 * count
		case "water":
			price = 0.7 * count
		case "beer":
			price = 1.15 * count
		case "sweets":
			price = 1.30 * count
		case "peanuts":
			price = 1.50 * count
		}

	} else if town == "Varna" {
		switch product {
		case "coffee":
			price = 0.45 * count
		case "water":
			price = 0.7 * count
		case "beer":
			price = 1.1 * count
		case "sweets":
			price = 1.35 * count
		case "peanuts":
			price = 1.55 * count
		}
	}

	fmt.Print(price)
}
