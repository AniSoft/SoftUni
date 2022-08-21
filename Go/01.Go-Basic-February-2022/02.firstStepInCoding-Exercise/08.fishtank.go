package main

import "fmt"

func main() {
	var length int
	fmt.Scanln(&length)

	var width int
	fmt.Scanln(&width)

	var height int
	fmt.Scanln(&height)

	var percent float32
	fmt.Scanln(&percent)

	var volume int = length * width * height
	var volumeLiters float32 = float32(volume) / 1000.0

	var needLiters = volumeLiters * (1 - (percent / 100.0))

	fmt.Print(needLiters)
}
