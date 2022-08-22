n = int(input())

counter = 0
for i in range(1, n + 1):
    for j in range(1, i + 1):
        counter += 1
        print(f'{counter} ', end='')
        if counter == n:
            break
    print()
    if counter == n:
        break