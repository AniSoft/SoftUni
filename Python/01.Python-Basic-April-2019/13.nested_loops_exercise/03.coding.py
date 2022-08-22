number = input()
number = reversed(number)

for i in number:
    num = int(i)
    if num == 0:
        print('ZERO')
    else:
        for j in range(num):
            symbol = chr(num + 33)
            print(f'{symbol}', end='')
        print()