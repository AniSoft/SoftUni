package main

import "fmt"

func main() {
	var inches float32
	fmt.Scanln(&inches)

	var cm float32 = inches * 2.54
	fmt.Println(cm)
}