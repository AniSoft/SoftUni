
package main

import "fmt"

func main() {
	var countEggsFirst, countEggsSecond int
	fmt.Scanln(&countEggsFirst)
	fmt.Scanln(&countEggsSecond)

	var input string
	fmt.Scanln(&input)

	for input != "End" {
		if input == "one" {
			countEggsSecond--
		} else if input == "two" {
			countEggsFirst--
		}

		if countEggsFirst <= 0 {
			fmt.Printf("Player one is out of eggs. Player two has %d eggs left.", countEggsFirst)
			break
		}

		if countEggsSecond <= 0 {
			fmt.Printf("Player two is out of eggs. Player one has %d  eggs left.", countEggsSecond)
		}

		fmt.Scanln(&input)
	}

	if input == "End" {
		fmt.Printf("Player one has %d eggs left.\n", countEggsFirst)
		fmt.Printf("Player two has %d eggs left.\n", countEggsSecond)
	}
}
