x1 = float(input())
y1 = float(input())
x2 = float(input())
y2 = float(input())

a = abs(x1 - x2)
b = abs(y1 - y2)

area = a * b
perimeter = 2 * (a + b)

print(f"{area:.2f}")
print(f"{perimeter:.2f}")
