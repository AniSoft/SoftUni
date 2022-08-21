package main

import "fmt"

func main() {
	var input string
	fmt.Scanln(&input)

	for input != "End" {
		var needMoney float32
		fmt.Scanln(&needMoney)

		var savedMoney float32 = 0
		for savedMoney <= needMoney {
			var money float32
			fmt.Scanln(&money)

			savedMoney += money
		}

		fmt.Printf("Going to %s!\n", input)

		fmt.Scanln(&input)
	}
}
