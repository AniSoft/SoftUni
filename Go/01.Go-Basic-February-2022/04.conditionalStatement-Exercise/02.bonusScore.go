package main

import "fmt"

func main() {
	var points int
	fmt.Scanln(&points)

	var bonus float32 = 0
	if points <= 100 {
		bonus = 5
	} else if points > 1000 {
		bonus = 0.1 * float32(points)
	} else {
		bonus = 0.2 * float32(points)
	}

	if points%2 == 0 {
		bonus += 1
	} else if points%10 == 5 {
		bonus += 2
	}

	fmt.Println(bonus)
	fmt.Println(float32(points) + bonus)
}
