a = int(input())
b = int(input())
h = int(input())
percent = float(input())
volume = a * b * h
liters = volume / 1000
percent = percent / 100

liters = liters * (1 - percent)

print(f"{liters:.3f}")