n = int(input())

for i in range(1111, 9999 + 1):
    counter = 0
    number = i
    for j in range(1, 4 + 1):
        num = number % 10
        number //= 10
        if num != 0 and n % num == 0:
            counter += 1
    if counter == 4:
        print(f'{i} ', end='')