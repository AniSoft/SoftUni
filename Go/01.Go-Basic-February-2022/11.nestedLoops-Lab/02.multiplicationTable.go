package main

import "fmt"

func main() {
	for first := 1; first <= 10; first++ {
		for second := 1; second <= 10; second++ {
			fmt.Printf("%d * %d = %d\n", first, second, first*second)
		}
	}
}
