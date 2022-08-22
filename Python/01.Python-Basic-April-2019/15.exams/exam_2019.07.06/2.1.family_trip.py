budget = float(input())
nights = int(input())
price = float(input())
adds = int(input())

if nights > 7:
    price = price - price * 0.05

all_nights = price * nights
adds_price = budget * adds / 100

total = all_nights + adds_price

rest = abs(budget - total)
if budget >= total:
    print(f'Ivanovi will be left with {rest:.2f} leva after vacation.')
else:
    print(f'{rest:.2f} leva needed.')
