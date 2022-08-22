budget = float(input())
people = int(input())
clothes = float(input())

decor = budget * 0.10

if people > 150:
    clothes = clothes * (1 - 0.1)
else:
    clothes

total = decor + clothes * people

rest = abs(budget - total)

if total > budget:
    print("Not enough money!")
    print(f"Wingard needs {rest:0.2f} leva more.")
else:
    print("Action!")
    print(f"Wingard starts filming with {rest:0.2f} leva left.")
