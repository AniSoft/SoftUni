trip = float(input())
number_puzzels = int(input())
number_dolls = int(input())
number_bears = int(input())
number_minions = int(input())
number_truck = int(input())

price_puzzels = 2.60
price_dolls = 3
price_bears = 4.10
price_minions = 8.2
price_truck = 2

all_number = number_puzzels + number_dolls + number_bears + number_minions + number_truck

total_price = number_puzzels * price_puzzels + number_dolls * price_dolls + number_bears * price_bears + number_minions * price_minions + number_truck * price_truck

if all_number >= 50:
    total_price = total_price * (1 - 0.25)
else:
    total_price

rent = total_price * 0.10

profit = total_price - rent

left_money = profit - trip

if left_money >= 0:
    print(f"Yes! {left_money:.2f} lv left.")
else:
    print(f"Not enough money! {abs(left_money):.2f} lv needed.")
