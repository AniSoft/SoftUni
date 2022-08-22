number1 = int(input())
number2 = int(input())

for i in range(number1, number2 + 1):
    even_sum = 0
    odd_sum = 0

    number = i
    for j in range(1, 6 + 1):
        current_num = number % 10
        number //= 10
        if j % 2 == 0:
            even_sum += current_num
        else:
            odd_sum += current_num
    if odd_sum == even_sum:
        print(i, end=' ')
        print(f'{i} ', end='')
