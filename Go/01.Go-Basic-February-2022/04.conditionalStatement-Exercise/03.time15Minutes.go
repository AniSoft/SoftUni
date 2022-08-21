package main

import "fmt"

func main() {
	var curHour, curMinutes int
	fmt.Scanln(&curHour)
	fmt.Scanln(&curMinutes)

	var curTimeInMinutes int = curHour*60 + curMinutes
	var additionalTime = curTimeInMinutes + 15

	var finalHour int = additionalTime / 60
	var finalMinutes int = additionalTime % 60

	if finalHour == 24 {
		finalHour = 0
	}
	
	fmt.Printf("%d:%02d", finalHour, finalMinutes)
}
