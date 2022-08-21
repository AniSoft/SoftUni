package main

import (
	"fmt"
	"math"
)

func main() {
	var typeFigure string
	fmt.Scanln(&typeFigure)

	if typeFigure == "square" {
		var side float32
		fmt.Scanln(&side)
		fmt.Printf("%.3f", side*side)

	} else if typeFigure == "rectangle" {
		var a, b float32
		fmt.Scanln(&a)
		fmt.Scanln(&b)
		fmt.Printf("%.3f", a*b)

	} else if typeFigure == "circle" {
		var radius float32
		fmt.Scanln(&radius)
		fmt.Printf("%.3f", math.Pi*radius*radius)

	} else if typeFigure == "triangle" {
		var a, h float32
		fmt.Scanln(&a)
		fmt.Scanln(&h)
		fmt.Printf("%.3f", a*h/2.0)
	}
}
