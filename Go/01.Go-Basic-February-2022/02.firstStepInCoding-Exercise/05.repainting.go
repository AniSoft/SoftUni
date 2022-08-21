package main

import "fmt"

func main() {
	var nylon int
	fmt.Scanln(&nylon)

	var paint int
	fmt.Scanln(&paint)

	var thinner int
	fmt.Scanln(&thinner)

	var hours int
	fmt.Scanln(&hours)

	var sumNylon = float32(nylon+2) * 1.5
	var sumPaint = float32(paint) * 14.5 * 1.1
	var sumThinner = float32(thinner) * 5.00
	var sumBag float32 = 0.40

	var totalMatarial = sumNylon + sumPaint + sumThinner + sumBag
	var sumMaster = (totalMatarial * 0.30) * float32(hours)
	var total = totalMatarial + sumMaster

	fmt.Print(total)
}
