film_name = input()
type_hall = input()
tickets_number = int(input())

price = 0
if film_name == 'A Star Is Born':
    if type_hall == 'normal':
        price = 7.50
    elif type_hall == 'luxury':
        price = 10.50
    elif type_hall == 'ultra luxury':
        price = 13.50
elif film_name == 'Bohemian Rhapsody':
    if type_hall == 'normal':
        price = 7.35
    elif type_hall == 'luxury':
        price = 9.45
    elif type_hall == 'ultra luxury':
        price = 12.75
elif film_name == 'Green Book':
    if type_hall == 'normal':
        price = 8.15
    elif type_hall == 'luxury':
        price = 10.25
    elif type_hall == 'ultra luxury':
        price = 13.25
elif film_name == 'The Favourite':
    if type_hall == 'normal':
        price = 8.75
    elif type_hall == 'luxury':
        price = 11.55
    elif type_hall == 'ultra luxury':
        price = 13.95

total=price*tickets_number

print(f'{film_name} -> {total:.2f} lv.')