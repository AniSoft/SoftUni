film_name = input()
offer = input()
tickets = int(input())

price = 0
if film_name == 'John Wick':
    if offer == 'Drink':
        price = 12
    elif offer == 'Popcorn':
        price = 15
    elif offer == 'Menu':
        price = 19
elif film_name == 'Star Wars':
    if offer == 'Drink':
        price = 18
    elif offer == 'Popcorn':
        price = 25
    elif offer == 'Menu':
        price = 30
elif film_name == 'Jumanji':
    if offer == 'Drink':
        price = 9
    elif offer == 'Popcorn':
        price = 11
    elif offer == 'Menu':
        price = 14

total = price * tickets
if film_name == 'Star Wars' and tickets >= 4:
    total = total - total * 0.30
elif film_name == 'Jumanji' and tickets == 2:
    total = total - total * 0.15

print(f'Your bill is {total:.2f} leva.')