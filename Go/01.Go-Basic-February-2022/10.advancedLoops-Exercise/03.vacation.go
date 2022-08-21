package main

import "fmt"

func main() {
	var tripPrice, currentMoney float32
	fmt.Scanln(&tripPrice)
	fmt.Scanln(&currentMoney)

	var countAllDays int = 0
	var countSpendDays int = 0

	for currentMoney < tripPrice {
		var action string
		fmt.Scanln(&action)

		var sum float32
		fmt.Scanln(&sum)

		countAllDays++

		if action == "save" {
			currentMoney += sum
			countSpendDays = 0
		} else if action == "spend" {
			countSpendDays++
			currentMoney -= sum
			if currentMoney < 0 {
				currentMoney = 0
			}

			if countSpendDays == 5 {
				fmt.Println("You can't save the money.")
				fmt.Println(countAllDays)
				break
			}
		}

	}

	if currentMoney >= tripPrice {
		fmt.Printf("You saved the money for %d days.", countAllDays)
	}

}
