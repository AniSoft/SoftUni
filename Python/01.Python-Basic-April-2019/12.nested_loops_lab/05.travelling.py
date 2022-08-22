while True:
    destination = input()

    if destination == 'End':
        break

    budget = float(input())

    money = 0

    while money < budget:
        current_sum = float(input())
        money += current_sum

    print(f'Going to {destination}!')