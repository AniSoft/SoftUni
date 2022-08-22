import sys

n = int(input())

odd_sum = 0
odd_max = -sys.maxsize - 1
odd_min = sys.maxsize

even_sum = 0
even_max = -sys.maxsize - 1
even_min = sys.maxsize

for i in range(1, n + 1):
    number = float(input())
    if i % 2 != 0:
        odd_sum += number
        if odd_max < number:
            odd_max = number
        if odd_min > number:
            odd_min = number
    else:
        even_sum += number
        if even_max < number:
            even_max = number
        if even_min > number:
            even_min = number
print(f'OddSum={odd_sum:.2f},')
if odd_min == sys.maxsize:
    print(f'OddMin=No,')
    print(f'OddMax=No,')
else:
    print(f'OddMin={odd_min:.2f},')
    print(f'OddMax={odd_max:.2f},')

print(f'EvenSum={even_sum:.2f},')
if even_min == sys.maxsize:
    print(f'EvenMin=No,')
    print(f'EvenMax=No')
else:
    print(f'EvenMin={even_min:.2f},')
    print(f'EvenMax={even_max:.2f}')