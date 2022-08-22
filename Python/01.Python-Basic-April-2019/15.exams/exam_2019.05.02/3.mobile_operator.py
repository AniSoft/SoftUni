time = input()
type_contract = input()
mobile_net = input()
months = int(input())

price = 0
if time == 'one':
    if type_contract == 'Small':
        price = 9.98
    elif type_contract == 'Middle':
        price = 18.99
    elif type_contract == 'Large':
        price = 25.98
    elif type_contract == 'ExtraLarge':
        price = 35.99
elif time == 'two':
    if type_contract == 'Small':
        price = 8.58
    elif type_contract == 'Middle':
        price = 17.09
    elif type_contract == 'Large':
        price = 23.59
    elif type_contract == 'ExtraLarge':
        price = 31.79

if mobile_net == 'yes':
    if price <= 10:
        price += 5.50
    elif 10 < price < 30:
        price += 4.35
    elif price > 30:
        price += 3.85

total = price * months
if time == 'two':
    total = total - total * 3.75 / 100

print(f'{total:.2f} lv.')
