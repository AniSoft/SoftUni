package main

import (
	"fmt"
	"math"
)

func main() {
	var countTournaments int
	fmt.Scanln(&countTournaments)

	var points int
	fmt.Scanln(&points)

	var totalWinPoints int = 0
	var countWins int = 0

	for tournaments := 1; tournaments <= countTournaments; tournaments++ {
		var result string
		fmt.Scanln(&result)

		switch result {
		case "W":
			points += 2000
			totalWinPoints += 2000
			countWins++
		case "F":
			points += 1200
			totalWinPoints += 1200
		case "SF":
			points += 720
			totalWinPoints += 720
		}
	}

	fmt.Printf("Final points: %d\n", points)

	var average float64 = (float64(totalWinPoints) / float64(countTournaments)) 
	fmt.Printf("Average points: %.0f\n", math.Floor(average))

	var percentWins float32 = float32(countWins) / float32(countTournaments)*100.0
	fmt.Printf("%.2f%%", percentWins)
}
