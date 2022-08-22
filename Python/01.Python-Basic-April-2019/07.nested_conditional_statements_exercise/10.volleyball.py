import math

year_type = input()
p = int(input())
h = int(input())

total_days = 0
# add days in sofia
total_days += (48 - h) * 3 / 4
# add days in other
total_days += h
# add holidays
total_days += p * 2 / 3

if year_type == 'leap':
    total_days *= 1.15

print(f'{math.floor(total_days)}')