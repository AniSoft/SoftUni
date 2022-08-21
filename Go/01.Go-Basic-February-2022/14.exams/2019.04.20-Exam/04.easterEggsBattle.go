package main

import "fmt"
import "os"

func main() {
    var eggsOnePlayer, eggsTwoPlayer float64
    fmt.Scan(&eggsOnePlayer, &eggsTwoPlayer)

    for {
        var current string
        fmt.Scan(&current)
        if current == "End of battle" || current == "End" {
            fmt.Printf("Player one has %v eggs left.\nPlayer two has %v eggs left.", eggsOnePlayer, eggsTwoPlayer)
            os.Exit(0)
        }

        if current == "one" {
            eggsTwoPlayer--
        } else {
            eggsOnePlayer--
        }

        if eggsTwoPlayer == 0 {
            fmt.Printf("Player two is out of eggs. Player one has %v eggs left.", eggsOnePlayer)
            os.Exit(0)

        } else if eggsOnePlayer == 0 {
            fmt.Printf("Player one is out of eggs. Player two has %v eggs left.", eggsTwoPlayer)
            os.Exit(0)
        }
    }

}
