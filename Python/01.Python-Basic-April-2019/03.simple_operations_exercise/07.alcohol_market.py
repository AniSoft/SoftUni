price_whiskey = float(input())
beer = float(input())
wine = float(input())
rakia = float(input())
whiskey = float(input())

price_rakia = price_whiskey / 2
price_wine = (1 - 0.40) * price_rakia
price_beer = (1 - 0.80) * price_rakia

sum_beer = beer * price_beer
sum_wine = wine * price_wine
sum_rakia = rakia * price_rakia
sum_whiskey = whiskey * price_whiskey

all_money = sum_beer + sum_rakia + sum_whiskey + sum_wine

print(f"{all_money:.2f}")
