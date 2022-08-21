package main

import (
	"fmt"
	"math"
)

func main() {
	var priceRocket float32
	fmt.Scanln(&priceRocket)

	var countRocket int
	fmt.Scanln(&countRocket)

	var shoose int
	fmt.Scanln(&shoose)

	var shoosePrice float32 = priceRocket / 6.0

	var total float32 = priceRocket*float32(countRocket) + shoosePrice*float32(shoose)
	var rest float32 = total * 0.2
	var final = total + rest

	var djoko float64 = math.Floor(float64(final) / 8.0)
	var sponsor float64 = math.Ceil(float64(final) * 7.0 / 8.0)

	fmt.Printf("Price to be paid by Djokovic %.0f\n", djoko)
	fmt.Printf("Price to be paid by sponsors %.0f", sponsor)
}
