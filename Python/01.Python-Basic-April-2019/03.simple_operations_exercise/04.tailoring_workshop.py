number = int(input())
a = float(input())
b = float(input())

covers_area = number * (a + 2 * 0.30) * (b + 2 * 0.30)
squares_area = number * (a / 2) * (a / 2)

price_USD = covers_area * 7 + squares_area * 9
price_BGN = price_USD * 1.85

print(f"{price_USD:.2f} USD")
print(f"{price_BGN:.2f} BGN")