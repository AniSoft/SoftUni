number1 = int(input())
number2 = int(input())

for i in range(number1, number2 + 1):
    right_sum = 0
    left_sum = 0
    number = i
    middle_number = 0

    for j in range(1, 5 + 1):
        current_num = number % 10
        number //= 10
        if j == 1 or j == 2:
            right_sum += current_num
        elif j == 4 or j == 5:
            left_sum += current_num
        else:
            middle_number = current_num

    if left_sum == right_sum:
        print(f'{i} ', end='')
    else:
        if left_sum < right_sum:
            left_sum += middle_number
        else:
            right_sum += middle_number
        if left_sum == right_sum:
            print(f'{i} ', end='')
