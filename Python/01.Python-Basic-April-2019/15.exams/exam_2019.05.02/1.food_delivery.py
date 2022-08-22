chicken = int(input())
fish = int(input())
veg = int(input())

all_menu = chicken * 10.35 + fish * 12.40 + veg * 8.15
desert = all_menu * 0.2
delivery = 2.5

total = all_menu + desert + delivery

print(f'Total: {total:.2f}')