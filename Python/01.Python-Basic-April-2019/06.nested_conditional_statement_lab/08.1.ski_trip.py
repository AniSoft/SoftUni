# NOT OK
day = int(input())
room = input()
score = input()

discount = 0
price = 0
if room == "room for one person":
    discount = 0
    price = (day - 1) * 18
elif room == "apartment":
    if day < 10:
        discount = 0.3
        price = (day - 1) * 25
        price = price - 0.3 * price
    if 10 <= day <= 15:
        discount = 0.35
        price = (day - 1) * 25
        price = price - 0.35 * price
    if day > 15:
        discount = 0.50
        price = (day - 1) * 25
        price = price - 0.55 * price
elif room == "president apartment":
    if day < 10:
        discount = 0.1
        price = (day - 1) * 35
        price = price - 0.1 * price
    if 10 <= day <= 15:
        discount = 0.15
        price = (day - 1) * 35
        price = price - 0.15 * price
    if day > 15:
        discount = 0.20
        price = (day - 1) * 35
        price = price - 0.20 * price

if score == "positive":
    price = price + price * 0.25

else:
    price = price - price * 0.10

print(f"{price:.2f}")
