type = input()
rows = int(input())
columns = int(input())

price = 0
if type == "Premiere":
    price = 12.00
elif type == "Normal":
    price = 7.50
elif type == "Discount":
    price = 5.00

income = price * rows * columns

print(f"{income:.2f} leva")