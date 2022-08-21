package main

import "fmt"

func main() {
	var budget float32
	fmt.Scanln(&budget)

	var destination string
	fmt.Scanln(&destination)

	var season string
	fmt.Scanln(&season)

	var countDays int
	fmt.Scanln(&countDays)

	var pricePerDay float32 = 0

	if season == "Winter" {
		switch destination {
		case "Dubai":
			pricePerDay = 45000
		case "Sofia":
			pricePerDay = 17000
		case "London":
			pricePerDay = 24000
		}
	} else if season == "Summer" {
		switch destination {
		case "Dubai":
			pricePerDay = 40000
		case "Sofia":
			pricePerDay = 12500
		case "London":
			pricePerDay = 20250
		}
	}

	var totalSum float32 = float32(countDays) * pricePerDay

	if destination == "Dubai" {
		totalSum = 0.7 * totalSum
	} else if destination == "Sofia" {
		totalSum = 1.25 * totalSum
	}

	var rest float32 = budget - totalSum
	if budget >= totalSum {
		fmt.Printf("The budget for the movie is enough! We have %.2f leva left!", rest)
	} else {
		var need float32 = totalSum - budget
		fmt.Printf("The director needs %.2f leva more!", need)
	}
}
