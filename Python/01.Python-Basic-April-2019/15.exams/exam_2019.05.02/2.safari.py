budget = float(input())
fuel_lt = float(input())
week_day = input()

price_fuel = fuel_lt * 2.10

total = price_fuel + 100

if week_day == 'Saturday':
    total = total - 0.1 * total

elif week_day == 'Sunday':
    total = total - 0.2 * total

rest = abs(budget - total)

if budget >= total:
    print(f'Safari time! Money left: {rest:.2f} lv.')
else:
    print(f'Not enough money! Money needed: {rest:.2f} lv.')
