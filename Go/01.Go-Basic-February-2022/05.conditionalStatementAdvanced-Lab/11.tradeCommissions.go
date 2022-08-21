package main

import "fmt"

func main() {
	var town string
	fmt.Scanln(&town)

	var sales float32
	fmt.Scanln(&sales)

	var commission float32

	if sales >= 0 && sales <= 500 {
		switch town {
		case "Sofia":
			commission = 0.05
			fmt.Printf("%.2f", sales*commission)
		case "Varna":
			commission = 0.045
			fmt.Printf("%.2f", sales*commission)
		case "Plovdiv":
			commission = 0.055
			fmt.Printf("%.2f", sales*commission)
		default:
			fmt.Print("error")
		}

	} else if sales > 500 && sales <= 1000 {
		switch town {
		case "Sofia":
			commission = 0.07
			fmt.Printf("%.2f", sales*commission)
		case "Varna":
			commission = 0.075
			fmt.Printf("%.2f", sales*commission)
		case "Plovdiv":
			commission = 0.08
			fmt.Printf("%.2f", sales*commission)
		default:
			fmt.Print("error")
		}

	} else if sales > 1000 && sales <= 10000 {
		switch town {
		case "Sofia":
			commission = 0.08
			fmt.Printf("%.2f", sales*commission)
		case "Varna":
			commission = 0.1
			fmt.Printf("%.2f", sales*commission)
		case "Plovdiv":
			commission = 0.12
			fmt.Printf("%.2f", sales*commission)
		default:
			fmt.Print("error")
		}

	} else if sales > 10000 {
		switch town {
		case "Sofia":
			commission = 0.12
			fmt.Printf("%.2f", sales*commission)
		case "Varna":
			commission = 0.13
			fmt.Printf("%.2f", sales*commission)
		case "Plovdiv":
			commission = 0.145
			fmt.Printf("%.2f", sales*commission)
		default:
			fmt.Print("error")
		}

	} else {
		fmt.Print("error")
	}
}
