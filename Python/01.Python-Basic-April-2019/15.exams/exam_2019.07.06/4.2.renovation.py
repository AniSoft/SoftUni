import math

a = int(input())
b = int(input())
no_paint = int(input())

all_room = a * b * 4
walls = math.floor(all_room - all_room * no_paint / 100)

command = input()
total = 0
while command != 'Tired!':
    liters = int(command)

    total += liters

    if total >= walls:
        break

    command = input()

rest = abs(total - walls)
if command == 'Tired!':
    print(f'{rest} quadratic m left.')
elif total > walls:
    print(f'All walls are painted and you have {rest} l paint left!')
elif total <= walls:
    print(f'All walls are painted! Great job, Pesho!')
