p1_counter = 0
p2_counter = 0
p3_counter = 0

number = int(input())
for i in range(1, number + 1):
    p = int(input())

    if p % 2 == 0:
        p1_counter += 1
    if p % 3 == 0:
        p2_counter += 1
    if p % 4 == 0:
        p3_counter += 1

print(f'{(p1_counter / number * 100):.2f}%')
print(f'{(p2_counter / number * 100):.2f}%')
print(f'{(p3_counter / number * 100):.2f}%')