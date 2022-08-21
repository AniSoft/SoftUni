package main

import "fmt"

func main() {
	var startInterval, endInterval, magicNumber int
	fmt.Scanln(&startInterval)
	fmt.Scanln(&endInterval)
	fmt.Scanln(&magicNumber)

	var count int = 0
	var isFound bool = false
	for firstNumber := startInterval; firstNumber <= endInterval; firstNumber++ {
		for secondNumber := startInterval; secondNumber <= endInterval; secondNumber++ {
			count++
			if firstNumber+secondNumber == magicNumber {
				isFound = true
				fmt.Printf("Combination N:%d (%d + %d = %d)", count, firstNumber, secondNumber, magicNumber)
				break
			}
		}

		if isFound == true {
			break
		}
	}

	if isFound == false {
		fmt.Printf("%d combinations - neither equals %d", count, magicNumber)
	}
}
