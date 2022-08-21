package main

import "fmt"

func main() {
	var budget float32
	fmt.Scanln(&budget)

	var countVideoCard, countCPU, countRam int
	fmt.Scanln(&countVideoCard)
	fmt.Scanln(&countCPU)
	fmt.Scanln(&countRam)

	var sumVideoCard float32 = float32(countVideoCard) * 250.0
	var sumCpu float32 = float32(countCPU) * 0.35 * sumVideoCard
	var sumRam float32 = float32(countRam) * 0.10 * sumVideoCard

	var totalSum float32 = sumVideoCard + sumCpu + sumRam

	if countVideoCard > countCPU {
		totalSum = 0.85 * totalSum
	}

	if budget >= totalSum {
		var leftMoney float32 = budget - totalSum
		fmt.Printf("You have %.2f leva left!", leftMoney)
	} else {
		var needSum float32 = totalSum - budget
		fmt.Printf("Not enough money! You need %.2f leva more!", needSum)
	}
}
