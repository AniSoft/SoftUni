package main

import "fmt"

func main() {
	var n int
	fmt.Scanln(&n)

	var group1, group2, group3, group4, group5 int = 0, 0, 0, 0, 0

	for i := 1; i <= n; i++ {
		var value int
		fmt.Scanln(&value)

		if value < 200 {
			group1++
		} else if value >= 200 && value <= 399 {
			group2++
		} else if value >= 400 && value <= 599 {
			group3++
		} else if value >= 600 && value <= 799 {
			group4++
		} else if value >= 800 {
			group5++
		}
	}

	var p1 float32 = float32(group1) / float32(n) * 100.0
	var p2 float32 = float32(group2) / float32(n) * 100.0
	var p3 float32 = float32(group3) / float32(n) * 100.0
	var p4 float32 = float32(group4) / float32(n) * 100.0
	var p5 float32 = float32(group5) / float32(n) * 100.0

	fmt.Printf("%.2f%%\n", p1)
	fmt.Printf("%.2f%%\n", p2)
	fmt.Printf("%.2f%%\n", p3)
	fmt.Printf("%.2f%%\n", p4)
	fmt.Printf("%.2f%%\n", p5)

}
