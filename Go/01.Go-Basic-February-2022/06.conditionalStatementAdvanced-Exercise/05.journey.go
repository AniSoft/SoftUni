package main

import "fmt"

func main() {
	var budget float32
	fmt.Scanln(&budget)

	var season string
	fmt.Scanln(&season)

	var destination string = ""
	var typeRent string = ""

	if budget <= 100 {
		destination = "Bulgaria"
		switch season {
		case "summer":
			typeRent = "Camp"
			budget = budget * 0.3
		case "winter":
			typeRent = "Hotel"
			budget = budget * 0.7
		}
	} else if budget <= 1000 {
		destination = "Balkans"
		switch season {
		case "summer":
			typeRent = "Camp"
			budget = budget * 0.4
		case "winter":
			typeRent = "Hotel"
			budget = budget * 0.8
		}
	} else if budget > 1000 {
		destination = "Europe"
		typeRent = "Hotel"
		budget = budget * 0.9
	}

	fmt.Printf("Somewhere in %s", destination)
	fmt.Println()
	fmt.Printf("%s - %.2f", typeRent, budget)
}
