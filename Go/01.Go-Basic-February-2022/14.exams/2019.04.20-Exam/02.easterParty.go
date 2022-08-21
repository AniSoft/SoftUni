package main

import (
	"fmt"
	"math"
)

func main() {
	var guests int
	fmt.Scanln(&guests)

	var budget float64
	fmt.Scanln(&budget)

	var countCake float64 = math.Ceil((float64(guests))/3.0)
	var countEgg int = 2 * guests
	var total float64 = countCake*4.0 + float64(countEgg)*0.45

	var rest float64 = budget - total
	if total <= budget {
		fmt.Printf("Lyubo bought %.0f Easter bread and %d eggs.\n", countCake, countEgg)
		fmt.Printf("He has %.2f lv. left.", rest)
	} else {
		var need float64 = total - budget
		fmt.Println("Lyubo doesn't have enough money.")
		fmt.Printf("He needs %.2f lv. more.", need)
	}
}
