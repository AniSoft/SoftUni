package main

import "fmt"

func main() {
	for i := 1; i <= 1000; i++ {
		if i%10 == 7 {
			fmt.Println(i)
		}
	}
}
