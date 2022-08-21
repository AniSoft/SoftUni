package main

import "fmt"

func main() {
	for hour := 0; hour <= 23; hour++ {
		for minutes := 0; minutes <= 59; minutes++ {
			fmt.Printf("%d:%d\n", hour, minutes)
		}
	}
}
