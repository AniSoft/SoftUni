package main

import "fmt"

func main() {
	var number int
	fmt.Scanln(&number)

	switch number {
	case 1:
		fmt.Print("Monday")
	case 2:
		fmt.Print("Tuesday")
	case 3:
		fmt.Print("Wednesday")
	case 4:
		fmt.Print("Thursday")
	case 5:
		fmt.Print("Friday")
	case 6:
		fmt.Print("Saturday")
	case 7:
		fmt.Print("Sunday")
	default:
		fmt.Print("Error")
	}
}
