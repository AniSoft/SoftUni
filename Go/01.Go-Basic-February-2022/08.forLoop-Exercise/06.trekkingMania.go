package main

import "fmt"

func main() {
	var countGroups int
	fmt.Scanln(&countGroups)

	var countMusala, countMonblan, countKilimanjaro, countK2, countEverest int = 0, 0, 0, 0, 0

	var totalCount int

	for group := 1; group <= countGroups; group++ {
		var countPeople int
		fmt.Scanln(&countPeople)

		totalCount += countPeople

		if countPeople <= 5 {
			countMusala += countPeople
		} else if countPeople >= 6 && countPeople <= 12 {
			countMonblan += countPeople
		} else if countPeople >= 13 && countPeople <= 25 {
			countKilimanjaro += countPeople
		} else if countPeople >= 26 && countPeople <= 40 {
			countK2 += countPeople
		} else if countPeople >= 41 {
			countEverest += countPeople
		}
	}

	var percentMusala float32 = float32(countMusala) / float32(totalCount) * 100.0
	var percentMonblan float32 = float32(countMonblan) / float32(totalCount) * 100.0
	var percentKilimanjaro float32 = float32(countKilimanjaro) / float32(totalCount) * 100.0
	var percentK2 float32 = float32(countK2) / float32(totalCount) * 100.0
	var percentEverest float32 = float32(countEverest) / float32(totalCount) * 100.0

	fmt.Printf("%.2f%%\n", percentMusala)
	fmt.Printf("%.2f%%\n", percentMonblan)
	fmt.Printf("%.2f%%\n", percentKilimanjaro)
	fmt.Printf("%.2f%%\n", percentK2)
	fmt.Printf("%.2f%%\n", percentEverest)

}
