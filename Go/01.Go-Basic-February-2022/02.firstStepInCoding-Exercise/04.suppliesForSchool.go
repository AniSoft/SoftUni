package main

import "fmt"

func main() {
	var pensQuantity int
	fmt.Scanln(&pensQuantity)

	var markersQuantity int
	fmt.Scanln(&markersQuantity)

	var cleanerQuantity int
	fmt.Scanln(&cleanerQuantity)

	var percentDiscount int
	fmt.Scanln(&percentDiscount)

	var sumPens float32 = float32(pensQuantity) * 5.80
	var sumMarkers float32 = float32(markersQuantity) * 7.20
	var sumCleaner float32 = float32(cleanerQuantity) * 1.20

	var totalSum = sumPens + sumMarkers + sumCleaner

	totalSum = totalSum - (float32(percentDiscount)/100.0)*totalSum

	fmt.Print(totalSum)
}