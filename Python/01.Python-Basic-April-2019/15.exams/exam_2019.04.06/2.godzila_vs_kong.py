budget = float(input())
people = int(input())
clothes = float(input())

decor = budget * 0.10

if people > 150:
    clothes = clothes - clothes * 0.10

all_clothes = clothes * people
total = decor + all_clothes

money_left = abs(budget - total)

if total > budget:
    print(f'Not enough money!')
    print(f'Wingard needs {money_left:.2f} leva more.')
else:
    print(f'Action!')
    print(f'Wingard starts filming with {money_left:.2f} leva left.')