fruit = input()
day = input()
quantity = float(input())

price = 0

if "Monday" == day or "Tuesday" == day or "Wednesday" == day \
        or "Thursday" == day or "Friday" == day:
    if "banana" == fruit:
        price = 2.50
    elif "apple" == fruit:
        price = 1.20
    elif "orange" == fruit:
        price = 0.85
    elif "grapefruit" == fruit:
        price = 1.45
    elif "kiwi" == fruit:
        price = 2.70
    elif "pineapple" == fruit:
        price = 5.50
    elif "grapes" == fruit:
        price = 3.85
elif "Saturday" == day or "Sunday" == day:
    if "banana" == fruit:
        price = 2.70
    elif "apple" == fruit:
        price = 1.25
    elif "orange" == fruit:
        price = 0.90
    elif "grapefruit" == fruit:
        price = 1.60
    elif "kiwi" == fruit:
        price = 3.00
    elif "pineapple" == fruit:
        price = 5.60
    elif "grapes" == fruit:
        price = 4.20

if price == 0:
    print("error")
else:
    price = price * quantity
    print(f"{price:.2f}")
