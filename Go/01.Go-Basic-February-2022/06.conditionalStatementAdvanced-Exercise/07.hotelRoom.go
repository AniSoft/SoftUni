// 50/100
package main

import "fmt"

func main() {
	var month string
	fmt.Scanln(&month)

	var count int
	fmt.Scanln(&count)

	var studioPrice float32
	var apartmentPrice float32

	if month == "May" || month == "October" && count > 7 {
		studioPrice = 50 * 0.95
		apartmentPrice = 65 * 0.9

	} else if month == "May" || month == "October" && count > 14 {
		studioPrice = 50 * 0.7
		apartmentPrice = 65 * 0.9

	} else if month == "June" || month == "September" && count > 14 {
		studioPrice = 75.2 * 0.8
		apartmentPrice = 68.7 * 0.9
	} else if month == "July" || month == "August" && count <= 14 {
		studioPrice = 76
		apartmentPrice = 77
	} else if month == "July" || month == "August" && count > 14 {
		studioPrice = 76
		apartmentPrice = 77 * 0.9
	}

	var totalStudio float32 = studioPrice * float32(count)
	var totalApartment float32 = apartmentPrice * float32(count)

	fmt.Printf("Apartment: %.2f lv.", totalApartment)
	fmt.Println()
	fmt.Printf("Studio: %.2f lv.", totalStudio)
}
