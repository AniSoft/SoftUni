import math

lemons_kg = float(input())
sugar_kg = float(input())
water_lt = float(input())

juice = lemons_kg * 980

total_juice = juice + water_lt * 1000 + 0.3 * sugar_kg

number_cups = math.floor(total_juice / 150)

money_earn = number_cups * 1.20

print(f'All cups sold: {number_cups}')
print(f'Money earned: {money_earn:.2f}')