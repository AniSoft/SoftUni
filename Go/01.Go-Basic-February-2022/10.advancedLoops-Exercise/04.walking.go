package main

import (
	"fmt"
	"strconv"
)

func main() {
	var targetSteps int = 10000
	var totalWalkedSteps int = 0

	var input string
	fmt.Scanln(&input)

	for input != "GoingHome" {
		walkedSteps, _ := strconv.Atoi(input)
		totalWalkedSteps += walkedSteps

		if totalWalkedSteps >= targetSteps {
			fmt.Println("Goal reached! Good job!")
			fmt.Printf("%d steps over the goal!", totalWalkedSteps-targetSteps)
			break
		}

		fmt.Scanln(&input)
	}

	if input == "GoingHome" {
		var stepHome int
		fmt.Scanln(&stepHome)
		totalWalkedSteps += stepHome

		if totalWalkedSteps >= targetSteps {
			fmt.Println("Goal reached! Good job!")
			fmt.Printf("%d steps over the goal!", totalWalkedSteps-targetSteps)
		} else {
			fmt.Printf("%d more steps to reach goal.", targetSteps-totalWalkedSteps)
		}
	}
}
