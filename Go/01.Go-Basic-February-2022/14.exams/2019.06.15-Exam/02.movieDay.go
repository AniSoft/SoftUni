package main

import "fmt"

func main() {
	var time int
	fmt.Scanln(&time)

	var scene int
	fmt.Scanln(&scene)

	var sceneTime int
	fmt.Scanln(&sceneTime)

	var total float32 = float32(time)*0.15 + float32(scene)*float32(sceneTime)

	var rest float32 = float32(time) - total
	if total <= float32(time) {
		fmt.Printf("You managed to finish the movie on time! You have %.0f minutes left!", rest)
	} else {
		var need float32 = total - float32(time)
		fmt.Printf("Time is up! To complete the movie you need %.0f minutes.", need)
	}
}
