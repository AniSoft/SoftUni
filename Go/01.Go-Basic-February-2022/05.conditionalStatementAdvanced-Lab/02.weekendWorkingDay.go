package main

import "fmt"

func main() {
	var dayOfWeek string
	fmt.Scanln(&dayOfWeek)

	switch dayOfWeek {
	case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday":
		fmt.Print("Working day")
	case "Saturday", "Sunday":
		fmt.Print("Weekend")
	default:
		fmt.Print("Error")
	}
}
