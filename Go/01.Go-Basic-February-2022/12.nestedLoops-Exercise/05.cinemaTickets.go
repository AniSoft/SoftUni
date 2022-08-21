package main

import "fmt"

func main() {
	var input string
	fmt.Scanln(&input)

	var all int
	fmt.Scanln(&place)

	var total int = 0
	var studentTicket int = 0
	var standardTicket int= 0
	var kidTicket int= 0

	for input != "Finish" {
		var typeTicket string
		fmt.Scanln(&typeTicket)

		for typeTicket != "End" {
			total++
			switch typeTicket {
			case "student":
				studentTicket++
			case "standard":
				
			case "kid":

			}

			fmt.Scanln(&typeTicket)
		}

		fmt.Scanln(&place)
	}

}
