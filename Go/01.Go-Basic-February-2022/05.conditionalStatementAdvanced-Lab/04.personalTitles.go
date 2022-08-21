package main

import "fmt"

func main() {
	var age float32 = 12
	// fmt.Scanln(&age)
	var gender string = "m"
	// fmt.Scanln(&gender)

	if gender == "m" {
		if age < 16 {
			fmt.Print("Master")
		} else {
			fmt.Print("Mr.")
		}
	} else if gender == "f" {
		if age < 16 {
			fmt.Print("Miss")
		} else {
			fmt.Print("Ms.")
		}
	}
}
