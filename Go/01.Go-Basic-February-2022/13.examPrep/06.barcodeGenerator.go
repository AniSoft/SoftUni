package main

import "fmt"

func main() {
	var startNumber, endNumber int
	fmt.Scanln(&startNumber)
	fmt.Scanln(&endNumber)

	var thousandsStartNumber int = startNumber / 1000
	var hundredsStartNumber int = startNumber / 100 % 10
	var tensStartNumber int = startNumber / 10 % 10
	var unnitStartNumber int = startNumber % 10

	var thousandsEndNumber int = endNumber / 1000
	var hundredsEndNumber int = endNumber / 100 % 10
	var tensEndNumber int = endNumber / 10 % 10
	var unnitEndNumber int = endNumber % 10

	for thousands := thousandsStartNumber; thousands <= thousandsEndNumber; thousands++ {
		for hundreds := hundredsStartNumber; hundreds <= hundredsEndNumber; hundreds++ {
			for tens := tensStartNumber; tens <= tensEndNumber; tens++ {
				for unit := unnitStartNumber; unit <= unnitEndNumber; unit++ {
					if thousands%2 != 0 && hundreds%2 != 0 && tens%2 != 0 && unit%2 != 0 {
						fmt.Printf("%d%d%d%d ", thousands, hundreds, tens, unit)
					}
				}
			}
		}
	}
}
