package main

import "fmt"

func main() {
	var examHour, examMinutes int
	fmt.Scanln(&examHour)
	fmt.Scanln(&examMinutes)

	var arriveHour, arriveMinute int
	fmt.Scanln(&arriveHour)
	fmt.Scanln(&arriveMinute)

	var examInMinutes int = examHour*60 + examMinutes
	var arriveInMinute int = arriveHour*60 + arriveMinute

	if arriveInMinute > examInMinutes {
		fmt.Println("Late")
		var late int = arriveInMinute - examInMinutes
		if late < 60 {
			fmt.Printf("%d minutes after the start", late)
		} else {
			var lateHour int = late / 60
			var lateMinutes int = late % 60
			fmt.Printf("%d:%02d hours after the start", lateHour, lateMinutes)
		}

	} else if arriveInMinute == examInMinutes || examInMinutes-arriveInMinute <= 30 {
		fmt.Println("On time")
		if examInMinutes-arriveInMinute <= 30 {
			fmt.Printf("%d minutes before the start", examInMinutes-arriveInMinute)
		}
	} else if examInMinutes-arriveInMinute > 30 {
		fmt.Println("Early")

		var early int = examInMinutes - arriveInMinute
		if early < 60 {
			fmt.Printf("%d minutes before the start", early)
		} else {
			var earlyHour int = early / 60
			var earlyMinutes int = early % 60

			fmt.Printf("%d:%02d hours before the start", earlyHour, earlyMinutes)
		}
	}
}
