import math
L = float(input())
W = float(input())
A = float(input())

area_hall = (L * 100) * (W * 100)
area_wardrobe = (A * 100) * (A * 100)
area_bench = area_hall / 10

free_space = area_hall - (area_wardrobe + area_bench)
dancers = free_space / (40 + 7000)

print(math.floor(dancers))