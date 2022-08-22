limit = int(input())

money_won = 0
money_lost = 0

fishes_counter = 0

for i in range(1, limit + 1):
    name = input()
    if name == 'Stop':
        break
    fishes_counter += 1
    weight = float(input())

    current_price = 0
    for letter in name:
        current_price += ord(letter)
    current_price /= weight

    if i % 3 == 0:
        money_won += current_price
    else:
        money_lost += current_price

if fishes_counter == limit:
    print(f'Lyubo fulfilled the quota!')

money_left = money_won - money_lost
if money_left < 0:
    print(f'Lyubo lost {abs(money_left):.2f} leva today.')
else:
    print(f'Lyubo\'s profit from {fishes_counter} fishes is {money_left:.2f} leva.')
