budget = float(input())
town = input()
season = input()
days = int(input())

price = 0
if town == 'Dubai':
    if season == 'Winter':
        price = 45000
    elif season == 'Summer':
        price = 40000
elif town == 'Sofia':
    if season == 'Winter':
        price = 17000
    elif season == 'Summer':
        price = 12500
elif town == 'London':
    if season == 'Winter':
        price = 24000
    elif season == 'Summer':
        price = 20250

total = price * days
if town == 'Dubai':
    total = total - total * 0.30
elif town == 'Sofia':
    total = total + total * 0.25

rest = abs(budget - total)
if budget >= total:
    print(f'The budget for the movie is enough! We have {rest:.2f} leva left!')
else:
    print(f'The director needs {rest:.2f} leva more!')
