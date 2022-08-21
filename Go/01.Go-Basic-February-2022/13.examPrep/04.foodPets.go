package main

import "fmt"

func main() {
	var days int
	fmt.Scanln(&days)

	var totalFood float32
	fmt.Scanln(&totalFood)

	var totalEatenBiscuits float32 = 0
	var totalEatenFood float32 = 0
	var totalEatenDog float32 = 0
	var totalEatenCat float32 = 0

	for day := 1; day <= days; day++ {
		var eatenDog int
		fmt.Scanln(&eatenDog)
		totalEatenDog += float32(eatenDog)

		var eatenCat int
		fmt.Scanln(&eatenCat)
		totalEatenCat += float32(eatenCat)

		var totalGramsPerDay float32 = float32(eatenDog) + float32(eatenCat)
		totalEatenFood += totalGramsPerDay

		if day%3 == 0 {
			var biscuitGrams float32 = 0.10 * totalGramsPerDay
			totalEatenBiscuits += biscuitGrams
		}
	}

	fmt.Printf("Total eaten biscuits: %.0fgr.\n", totalEatenBiscuits)

	var percentEatenFood float32 = totalEatenFood / totalFood * 100.0
	fmt.Printf("%.2f%% of the food has been eaten.\n", percentEatenFood)

	var percentEatenDog float32 = totalEatenDog / totalEatenFood * 100.0
	fmt.Printf("%.2f%% eaten from the dog.\n", percentEatenDog)

	var percentEatenCat float32 = totalEatenCat / totalEatenFood * 100.0
	fmt.Printf("%.2f%% eaten from the cat.\n", percentEatenCat)

}
