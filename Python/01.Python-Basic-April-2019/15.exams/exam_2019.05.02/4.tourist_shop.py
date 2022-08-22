budget = float(input())

counter = 0
total = 0
command = input()
while command != 'Stop':
    product_name = command
    price = float(input())

    counter += 1
    if counter % 3 == 0:
        price = 0.5 * price

    total += price

    command = input()

rest = abs(budget - total)
if total > budget:
    print(f'You don\'t have enough money!')
    print(f'You need {rest:.2f} leva!')
else:
    print(f'You bought {counter} products for {total:.2f} leva.')
