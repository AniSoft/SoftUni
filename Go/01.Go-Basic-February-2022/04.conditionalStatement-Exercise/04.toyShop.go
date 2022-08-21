package main

import "fmt"

func main() {
	var tripPrice float32
	fmt.Scanln(&tripPrice)

	var puzzelsCount, dollsCount, bearsCount, minionCount, trucksCount int
	fmt.Scanln(&puzzelsCount)
	fmt.Scanln(&dollsCount)
	fmt.Scanln(&bearsCount)
	fmt.Scanln(&minionCount)
	fmt.Scanln(&trucksCount)

	var profit float32 = float32(puzzelsCount)*2.6 + float32(dollsCount)*3 + float32(bearsCount)*4.10 + float32(minionCount)*8.2 + float32(trucksCount)*2

	var countToys = puzzelsCount + dollsCount + bearsCount + minionCount + trucksCount

	if countToys >= 50 {
		profit = profit - 0.25*profit // 0.75*profit
	}

	var rent float32 = 0.1 * profit
	var finalSum float32 = profit - rent

	if tripPrice <= finalSum {
		var leftMoney float32 = finalSum - tripPrice
		fmt.Printf("Yes! %.2f lv left.", leftMoney)
	} else {
		var needMoney float32 = tripPrice - finalSum
		fmt.Printf("Not enough money! %.2f lv needed.", needMoney)
	}
}