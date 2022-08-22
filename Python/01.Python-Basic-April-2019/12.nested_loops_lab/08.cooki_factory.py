n = int(input())

for batch in range(1, n + 1):
    eggs = False
    flour = False
    sugar = False

    while True:
        products = input()
        if products == "Bake!":
            if eggs and flour and sugar:
                print(f'Baking batch number {batch}...')
                break
            else:
                print("The batter should contain flour, eggs and sugar!")

        if products == "eggs":
            eggs = True
        elif products == "flour":
            flour = True
        elif products == "sugar":
            sugar = True