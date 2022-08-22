type_flowers = input()
number = int(input())
budget = int(input())

rose = 5
dahlias = 3.80
tulips = 2.80
narcissus = 3
gladiolus = 2.5

price = 0
if type_flowers == "Roses":
    price = number * rose
elif type_flowers == "Dahlias":
    price = number * dahlias
elif type_flowers == "Tulips":
    price = number * tulips
elif type_flowers == "Narcissus":
    price = number * narcissus
elif type_flowers == "Gladiolus":
    price = number * gladiolus

if type_flowers == "Roses" and number > 80:
    price = price * 0.9
elif type_flowers == "Dahlias" and number > 90:
    price = price * 0.85
elif type_flowers == "Tulips" and number > 80:
    price = price * 1.15
elif type_flowers == "Gladiolus" and number < 80:
    price = price * 1.20

if budget >= price:
    print(f"Hey, you have a great garden with {number} {type_flowers} and {(budget - price):.2f} leva left.")
else:
    print(f"Not enough money, you need {(price - budget):.2f} leva more.")
