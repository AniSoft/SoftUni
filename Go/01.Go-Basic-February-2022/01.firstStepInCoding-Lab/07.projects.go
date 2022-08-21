package main

import "fmt"

func main() {
	var name string
	fmt.Scanln(&name)

	var number int
	fmt.Scanln(&number)

	var total int = number * 3

	fmt.Printf("The architect %s will need %d hours to complete %d project/s.", name, total, number)

}
