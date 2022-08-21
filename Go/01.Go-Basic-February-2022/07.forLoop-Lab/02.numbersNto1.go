package main

import "fmt"

func main()  {
	var n int
	fmt.Scanln(&n)

	for i := n; i >=1; i-- {
		fmt.Println(i)
	}
}