package main

import "fmt"

func main() {
	var n int
	fmt.Scanln(&n)

	var count int = 0

	for x1 := 0; x1 <= n; x1++ {
		for x2 := 0; x2 <= n; x2++ {
			for x3 := 0; x3 <= n; x3++ {
				if x1+x2+x3 == n {
					count++
				}
			}
		}
	}

	fmt.Println(count)
}