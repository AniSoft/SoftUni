drink = input()
sugar = input()
number = int(input())

price = 0
total = 0
if drink == 'Espresso':
    if sugar == 'Without':
        price = 0.90 - 0.9 * 0.35
    elif sugar == 'Normal':
        price = 1
    elif sugar == 'Extra':
        price = 1.20
elif drink == 'Cappuccino':
    if sugar == 'Without':
        price = 1 - 1 * 0.35
    elif sugar == 'Normal':
        price = 1.2
    elif sugar == 'Extra':
        price = 1.60
elif drink == 'Tea':
    if sugar == 'Without':
        price = 0.5 - 0.5 * 0.35
    elif sugar == 'Normal':
        price = 0.60
    elif sugar == 'Extra':
        price = 0.70

total = number * price
if drink == 'Espresso' and number >= 5:
    total = total - total * 0.25

if total > 15:
    total = total - total * 0.20

print(f'You bought {number} cups of {drink} for {total:.2f} lv.')