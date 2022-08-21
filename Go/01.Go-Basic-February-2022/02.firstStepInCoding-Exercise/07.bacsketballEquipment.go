package main

import "fmt"

func main() {
	var tax int
	fmt.Scanln(&tax)

	var sumTrainers float32 = 0.6 * float32(tax)
	var sumSuit float32 = 0.8 * sumTrainers
	var sumBall float32 = sumSuit / 4.0
	var sumAcc float32 = sumBall / 5.0

	var totalSum float32 = float32(tax) + sumTrainers + sumSuit + sumBall + sumAcc
	fmt.Print(totalSum)
}
