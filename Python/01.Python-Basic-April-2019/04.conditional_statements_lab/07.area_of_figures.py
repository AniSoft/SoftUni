from math import pi

shape = input()
area = 0.0

if shape == 'square':
    side = float(input())
    area = side * side
elif shape == 'rectangle':
    sideA = float(input())
    sideB = float(input())
    area = sideA * sideB
elif shape == 'circle':
    radius = float(input())
    area = pi * radius * radius
elif shape == 'triangle':
    sideA = float(input())
    sideH = float(input())
    area = sideA * sideH / 2

print(f"{area:.3f}")