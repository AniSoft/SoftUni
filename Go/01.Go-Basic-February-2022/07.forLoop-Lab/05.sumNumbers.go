package main

import "fmt"

func main() {
	var n int
	fmt.Scanln(&n)

	var sum int = 0
	for i := 1; i <= n; i++ {
		var value int
		fmt.Scanln(&value)

		sum += value
	}

	fmt.Println(sum)
}
