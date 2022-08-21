package main

import "fmt"

func main() {
	var n int
	fmt.Scanln(&n)

	for number := 1111; number <= 9999; number++ {
		var units int = number % 10
		var tens int = number / 10 % 10
		var hundreds int = number / 100 % 10
		var thousands int = number / 1000 % 10

		var check1 bool = units != 0 && n%units == 0
		var check2 bool = tens != 0 && n%tens == 0
		var check3 bool = hundreds != 0 && n%hundreds == 0
		var check4 bool = n%thousands == 0

		if check1 && check2 && check3 && check4 {
			fmt.Printf("%d ", number)
		}
	}
}
