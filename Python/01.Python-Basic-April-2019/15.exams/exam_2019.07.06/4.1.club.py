need_money = float(input())

cocktail = input()
total = 0
while cocktail != 'Party!':
    number = int(input())
    price = len(cocktail)

    order = price * number

    if order % 2 == 1:
        order = order - order * 0.25

    total += order

    if total >= need_money:
        break

    cocktail = input()

rest = abs(need_money - total)
if cocktail == 'Party!':
    print(f'We need {rest:.2f} leva more.')
else:
    print(f'Target acquired.')

print(f'Club income - {total:.2f} leva.')