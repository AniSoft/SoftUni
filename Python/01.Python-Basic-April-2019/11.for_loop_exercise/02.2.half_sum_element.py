import sys

max_num = -sys.maxsize
sum_number = 0

number_count = int(input())

for i in range(number_count):
    current_num = int(input())

    if current_num > max_num:
        max_num = current_num

    sum_number += current_num

sum_number -= max_num
if sum_number == max_num:
    print('Yes')
    print(f'Sum = {sum_number}')
else:
    print('No')
    print(f'Diff = {abs(max_num - sum_number)}')