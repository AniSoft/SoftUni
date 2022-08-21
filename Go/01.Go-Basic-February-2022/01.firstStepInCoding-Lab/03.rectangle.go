package main

import "fmt"

func main() {
	var a, b int

	fmt.Scanln(&a)
	fmt.Scanln(&b)

	fmt.Println(a * b)
}