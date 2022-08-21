package main

import "fmt"

func main() {
	var countTabs int
	fmt.Scanln(&countTabs)

	var salary int
	fmt.Scanln(&salary)

	for tab := 1; tab <= countTabs; tab++ {
		var siteName string
		fmt.Scanln(&siteName)

		switch siteName {
			case "Facebook":
				salary -= 150
			case "Instagram":
				salary -= 100
			case "Reddit":
				salary -= 50
		}

		if salary <= 0 {
			fmt.Println("You have lost your salary.")
			break
		}
	}

	if salary>0{
		fmt.Println(salary)
	}

}
