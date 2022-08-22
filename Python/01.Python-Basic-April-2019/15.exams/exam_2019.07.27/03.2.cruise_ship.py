trip = input()
type = input()
nights = int(input())

price = 0
if trip == 'Mediterranean':
    if type == 'standard cabin':
        price = 27.50
    elif type == 'cabin with balcony':
        price = 30.20
    elif type == 'apartment':
        price = 40.50
elif trip == 'Adriatic':
    if type == 'standard cabin':
        price = 22.99
    elif type == 'cabin with balcony':
        price = 25.00
    elif type == 'apartment':
        price = 34.99
elif trip == 'Aegean':
    if type == 'standard cabin':
        price = 23.00
    elif type == 'cabin with balcony':
        price = 26.60
    elif type == 'apartment':
        price = 39.80

total = price * nights * 4

if nights > 7:
    total = total - total * 0.25

print(f'Annie\'s holiday in the {trip} sea costs {total:.2f} lv.')