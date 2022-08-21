package main

import "fmt"

func main() {
	var countJury int
	fmt.Scanln(&countJury)

	var input string
	fmt.Scanln(&input)

	var sumAllGrades float32 = 0
	var countAllGrades int = 0

	for input != "Finish" {
		var presentation string = input
		var sumGradesPerPres float32 = 0

		for jury := 1; jury <= countJury; jury++ {
			var grade float32
			fmt.Scanln(&grade)
			sumGradesPerPres += grade
			sumAllGrades += grade
			countAllGrades++
		}

		var average float32 = sumGradesPerPres / float32(countJury)
		fmt.Printf("%s - %.2f.\n", presentation, average)

		fmt.Scanln(&input)
	}

	var averageAll float32 = sumAllGrades / float32(countAllGrades)
	fmt.Printf("Student's final assessment is %.2f.", averageAll)
}
