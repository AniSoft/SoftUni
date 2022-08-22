budget = int(input())
bathrobe = float(input())
discount = int(input())

umbrella = bathrobe * 2 / 3
japan = 0.75 * umbrella
bag = (bathrobe + japan) / 3

total = bathrobe + umbrella + japan + bag
total_discount = total - total * (discount/100)

money = abs(total_discount - budget)

if budget >= total_discount:
    print(f'Annie\'s sum is {total_discount:.2f} lv. She has {money:.2f} lv. left.')
else:
    print(f'Annie\'s sum is {total_discount:.2f} lv. She needs {money:.2f} lv. more.')