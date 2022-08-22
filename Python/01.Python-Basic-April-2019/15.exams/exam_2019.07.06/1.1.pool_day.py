import math
people = int(input())
enter_price = float(input())
chair_price = float(input())
umbrella_price = float(input())

all_enter = people * enter_price
all_chair = math.ceil(people * 0.75) * chair_price
all_umbrella = math.ceil(people * 0.5) * umbrella_price

total = all_enter + all_chair + all_umbrella

print(f'{total:.2f} lv.')