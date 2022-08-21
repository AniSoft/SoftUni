package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {
	var width, lenght int
	fmt.Scanln(&width)
	fmt.Scanln(&lenght)

	var pieces int = width * lenght

	var input string
	fmt.Scanln(&input)

	for input != "STOP" {
		takenPieces, _ := strconv.Atoi(input)
		pieces -= takenPieces

		if pieces <= 0 {
			fmt.Printf("No more cake left! You need %.0f pieces more.", math.Abs(float64(pieces)))
			break
		}

		fmt.Scanln(&input)
	}

	if input == "STOP" {
		fmt.Printf("%d pieces are left.", pieces)
	}

}
