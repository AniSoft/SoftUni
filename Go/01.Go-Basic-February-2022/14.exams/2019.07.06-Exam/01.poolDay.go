package main

import (
	"fmt"
	"math"
)

func main() {
	var people float64
	fmt.Scanln(&people)

	var tax float64
	fmt.Scanln(&tax)

	var chair float64
	fmt.Scanln(&chair)

	var umbrella float64
	fmt.Scanln(&umbrella)

	var total float64 = math.Ceil(people/2.0)*umbrella + math.Ceil(people*0.75)*chair + tax*people

	fmt.Printf("%.2f lv.", total)

}
