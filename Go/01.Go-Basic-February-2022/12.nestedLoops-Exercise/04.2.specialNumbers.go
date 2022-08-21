package main

import "fmt"

func main() {
	var n int
	fmt.Scanln(&n)

	for thousands := 1; thousands <= 9; thousands++ {
		for hundreds := 1; hundreds <= 9; hundreds++ {
			for tens := 1; tens <= 9; tens++ {
				for units := 1; units <= 9; units++ {
					var check1 bool = n%units == 0
					var check2 bool = n%tens == 0
					var check3 bool = n%hundreds == 0
					var check4 bool = n%thousands == 0

					if check1 && check2 && check3 && check4 {
						fmt.Printf("%d%d%d%d ", thousands, hundreds, tens, units)
					}
				}
			}
		}
	}
}
