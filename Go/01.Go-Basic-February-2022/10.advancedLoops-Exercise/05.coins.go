package main

import (
	"fmt"	
)

func main() {
	var change float32
	fmt.Scanln(&change)

	var changeStotinki int = int(change*100) 

	var count int = 0
	for changeStotinki > 0 {
		if changeStotinki >= 200 {
			changeStotinki -= 200
			count++
		} else if changeStotinki >= 100 {
			changeStotinki -= 100
			count++
		} else if changeStotinki >= 50 {
			changeStotinki -= 50
			count++
		} else if changeStotinki >= 20 {
			changeStotinki -= 20
			count++
		} else if changeStotinki >= 10 {
			changeStotinki -= 10
			count++
		} else if changeStotinki >= 5 {
			changeStotinki -= 5
			count++
		} else if changeStotinki >= 2 {
			changeStotinki -= 2
			count++
		} else if changeStotinki >= 1 {
			changeStotinki -= 1
			count++
		}
	}

	fmt.Print(count)

}
