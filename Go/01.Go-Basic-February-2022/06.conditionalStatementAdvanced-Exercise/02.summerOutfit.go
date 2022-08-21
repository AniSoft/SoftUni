package main

import "fmt"

func main() {
	var degrees int
	fmt.Scanln(&degrees)

	var partOfDay string
	fmt.Scanln(&partOfDay)

	var outfit string = ""
	var shoes string = ""

	if degrees >= 10 && degrees <= 18 {
		switch partOfDay {
		case "Morning":
			outfit = "Sweatshirt"
			shoes = "Sneakers"
		case "Afternoon", "Evening":
			outfit = "Shirt"
			shoes = "Moccasins"
		}
	} else if degrees > 18 && degrees <= 24 {
		switch partOfDay {
		case "Morning", "Evening":
			outfit = "Shirt"
			shoes = "Moccasins"
		case "Afternoon":
			outfit = "T-Shirt"
			shoes = "Sandals"
		}
	} else if degrees >= 25 {
		switch partOfDay {
		case "Morning":
			outfit = "T-Shirt"
			shoes = "Sandals"
		case "Afternoon":
			outfit = "Swim Suit"
			shoes = "Barefoot"
		case "Evening":
			outfit = "Shirt"
			shoes = "Moccasins"
		}
	}

	fmt.Printf("It's %d degrees, get your %s and %s.", degrees, outfit, shoes)
}
