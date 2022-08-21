package main

import "fmt"

func main() {
	var n int
	fmt.Scanln(&n)

	// Variant 1
	// for number := 1; number <= n; number = number*2 + 1 {
	// 	fmt.Println(number)
	// }

	// Variant 2
	var number int = 1
	for number <= n {
		fmt.Println(number)
		number = number*2 + 1
	}
}
